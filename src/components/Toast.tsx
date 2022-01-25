import React from 'react';

interface ToastProps {
  type: string;
  content: React.ReactChild;
  id: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Toast({ type, content, id, onClick }: ToastProps) {
  switch (type) {
    case 'success':
      return (
        <div
          className="bg-green-100 border-l-4 border-green-700 text-green-700 px-4 py-2 max-w-xs mb-3 z-100 rounded-md"
          role="alert"
        >
          <span className="w-full flex flex-row flex-wrap">
            <p className="font-semibold">¡Éxito!</p>
            <button
              type="button"
              className="ml-auto p-0 bg-transparent focus:outline-none outline-none"
              data-id={id}
              onClick={onClick}
            >
              <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
          {typeof content === 'string' ? (
            <p className="text-sm">{content}</p>
          ) : (
            <>{content}</>
          )}
        </div>
      );
    case 'danger':
      return (
        <div
          className="bg-red-100 border-l-4 border-red-700 text-red-700 px-4 py-2 max-w-xs mb-3 z-100 rounded-md"
          role="alert"
        >
          <span className="w-full flex flex-row flex-wrap">
            <p className="font-semibold">¡Error!</p>
            <button
              type="button"
              className="ml-auto p-0 bg-transparent focus:outline-none outline-none"
              data-id={id}
              onClick={onClick}
            >
              <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
          {typeof content === 'string' ? (
            <p className="text-sm">{content}</p>
          ) : (
            <>{content}</>
          )}
        </div>
      );
    case 'warning':
      return (
        <div
          className="bg-yellow-100 border-l-4 border-yellow-600 text-yellow-700 px-4 py-2 max-w-xs z-100 mb-3 rounded-md"
          role="alert"
        >
          <span className="w-full flex flex-row flex-wrap">
            <p className="font-semibold">¡Cuidado!</p>
            <button
              type="button"
              className="ml-auto p-0 bg-transparent focus:outline-none outline-none"
              data-id={id}
              onClick={onClick}
            >
              <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
          {typeof content === 'string' ? (
            <p className="text-sm">{content}</p>
          ) : (
            <>{content}</>
          )}
        </div>
      );

    default:
      return (
        <div
          className="bg-gray-100 border-l-4 border-blue-800 text-gray-700 px-4 py-2 max-w-xs z-100 mb-3 rounded-md"
          role="alert"
        >
          <span className="w-full flex flex-row flex-wrap">
            <p className="font-semibold">Información</p>
            <button
              type="button"
              className="ml-auto p-0 bg-transparent focus:outline-none outline-none"
              data-id={id}
              onClick={onClick}
            >
              <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
          {typeof content === 'string' ? (
            <p className="text-sm">{content}</p>
          ) : (
            <>{content}</>
          )}
        </div>
      );
  }
}
