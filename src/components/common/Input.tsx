import React, { InputHTMLAttributes, DetailedHTMLProps } from 'react';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  labelSrOnly?: boolean;
  notMargin?: boolean;
  children?: React.ReactNode;
}

export default React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      type,
      value,
      onChange,
      placeholder,
      className = '',
      labelSrOnly = false,
      notMargin = false,
      ...rest
    },
    ref
  ) => (
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
      <input
        name={name}
        id={name}
        type={type}
        value={value}
        placeholder={placeholder || label}
        className={`
          mt-1 px-3 py-1.5 w-full block bg-medium-blue text-font-black dark:bg-medium-gray dark:text-font-white rounded-lg text-base border-medium-blue dark:border-medium-gray focus:border-2 focus:border-primary-300 transition-all duration-300 ease-in-out
          ${rest.disabled ? 'opacity-75 cursor-not-allowed' : ''}`}
        onChange={onChange}
        ref={ref}
        {...rest}
      />
    </label>
  )
);
