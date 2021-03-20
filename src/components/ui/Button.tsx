import React from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactChild | Array<React.ReactChild>;
}

export default function Button({
  children,
  type,
  disabled,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`text-font-white bg-primary-400 hover:bg-primary-300 py-1.5 px-6 rounded-full disabled:opacity-50 disabled:bg-primary-500 ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
