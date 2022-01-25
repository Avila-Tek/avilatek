import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';
import Toast from '../components/Toast';

export interface IToastContext {
  alerts?: Array<{ type: string; content: React.ReactChild }>;
  notify?: (content: string | React.ReactChild, type: string) => void;
}

export const ToastContext = React.createContext<IToastContext>({
  alerts: [],
});

interface ToastContextProviderProps {
  children?: React.ReactNode;
}

export const ToastContextProvider = ({
  children,
}: ToastContextProviderProps) => {
  const [alerts, setAlerts] = React.useState([]);

  const notify = (
    content: string | React.ReactChild = '',
    type: string = ''
  ) => {
    const id = uuid();
    setAlerts((prev) => [
      {
        content,
        type,
        id,
        timeOut: setTimeout(() => {
          setAlerts((__alerts) => __alerts.filter((alert) => alert.id !== id));
        }, 3000),
      },
      ...prev,
    ]);
  };

  const onDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const { id } = e.currentTarget.dataset;
    setAlerts((_alerts) => _alerts.filter((alert) => alert.id !== id));
  };

  return (
    <ToastContext.Provider value={{ notify, alerts }}>
      <div
        className="fixed py-4 bottom-0 right-4 w-2/3 md:w-1/4 mb-1/12"
        style={{ zIndex: 100 }}
      >
        <AnimatePresence>
          {alerts.map((alert) => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.5,
                transition: { duration: 0.2 },
              }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <Toast
                type={alert.type}
                content={alert.content}
                id={alert.id}
                onClick={onDelete}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {children}
    </ToastContext.Provider>
  );
};
