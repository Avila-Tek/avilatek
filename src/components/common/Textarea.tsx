import React from 'react';

interface InputProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
  labelSrOnly?: boolean;
  notMargin?: boolean;
  children?: React.ReactNode;
}

export default function Input({
  label,
  name,
  value,
  onChange,
  className = '',
  labelSrOnly = false,
  notMargin = false,
  ...rest
}: InputProps) {
  return (
    <>
      <label
        htmlFor={name}
        className={`block ${notMargin ? 'mb-0' : 'mb-4'} ${className}`}
      >
        <span
          className={`text-sm lg:text-base text-primary-500 dark:text-primary-400 font-bold ${
            labelSrOnly ? 'sr-only' : ''
          }`}
        >
          {label}
          {rest.required && <span className="text-red-500"> * </span>}
        </span>
        <textarea
          id={name}
          name={name}
          defaultValue={value}
          className={`
          mt-1 block bg-medium-blue text-font-black dark:bg-medium-gray dark:text-font-white rounded-lg px-3 py-1.5 w-full text-base border-medium-blue dark:border-medium-gray focus:border-2 focus:border-primary-300 transition-all duration-300 ease-in-out
          ${rest.disabled ? 'opacity-75 cursor-not-allowed' : ''}`}
          onChange={onChange}
          {...rest}
        />
      </label>
    </>
  );
}