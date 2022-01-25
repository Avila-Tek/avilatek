import React from 'react';

interface ToastProps {
  type: string;
  content: React.ReactChild;
  id: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Toast({ type, content, id, onClick }: ToastProps) {
  return (
    <div
      className={`border-l-4 px-4 py-2 max-w-xs z-20 mb-3 ${
        type === 'success' && 'bg-green-200 border-green-700 text-green-700'
      } ${type === 'danger' && 'bg-red-200 border-red-700 text-red-700'} ${
        type === 'warning' && 'bg-yellow-200 border-yellow-700 text-yellow-700'
      } ${
        !['success', 'danger', 'warning'].includes(type) &&
        'bg-gray-200 border-blue-700 text-gray-700'
      }`}
    >
      <span className="w-full flex flex-row flex-wrap">
        <p className="font-semibold">
          {type === 'success' && '¡Éxito!'}
          {type === 'danger' && '¡Error!'}
          {type === 'warning' && '¡Cuidado!'}
          {!['success', 'danger', 'warning'].includes(type) && '¡Info!'}
        </p>
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
        <p className="text-sm leading-normal">{content}</p>
      ) : (
        <>{content}</>
      )}
    </div>
  );
}
