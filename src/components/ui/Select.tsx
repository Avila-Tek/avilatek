import React from 'react';

interface SelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label: string;
  labelSrOnly?: boolean;
  notMargin?: boolean;
  children?: React.ReactNode;
}

export default function Select({
  label,
  name,
  value,
  onChange,
  children,
  className = '',
  labelSrOnly = false,
  notMargin = false,
  ...rest
}: SelectProps) {
  return (
    <label
      htmlFor={name}
      className={`block ${notMargin ? 'mb-0' : 'mb-5'} ${className}`}
    >
      <span
        className={`text-sm lg:text-base text-primary-500 font-bold ${
          labelSrOnly ? 'sr-only' : ''
        }`}
      >
        {label}
        {rest.required && <span className="text-red-500"> * </span>}
      </span>
      <select
        name={name}
        id={name}
        defaultValue={value}
        onChange={onChange}
        className="mt-1 px-3 py-1.5 w-full block bg-medium-blue text-font-black rounded-lg text-sm lg:text-base border-medium-blue focus:border-2 focus:border-primary-300 disabled:opacity-75"
        disabled={rest.disabled}
        {...rest}
      >
        {children}
      </select>
    </label>
  );
}