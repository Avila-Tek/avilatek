import { useContext } from 'react';
import { ToastContext } from '../context/ToastContext';

export default function useNotify(): (
  content: React.ReactChild | string,
  type: string
) => void {
  const { notify } = useContext(ToastContext);
  return notify;
}
