import React, { InputHTMLAttributes, DetailedHTMLProps } from 'react';
import UploadIcon from '../icons/UploadIcon';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  labelSrOnly?: boolean;
  notMargin?: boolean;
  fileName?: string;
  children?: React.ReactNode;
}

export default React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      value,
      onChange,
      placeholder,
      className = '',
      labelSrOnly = false,
      notMargin = false,
      fileName = '',
      ...rest
    },
    ref
  ) => (
    <>
      <p className="block">
        <span
          className={`text-sm lg:text-base text-primary-500 dark:text-primary-400 font-bold ${
            labelSrOnly ? 'sr-only' : ''
          }`}
        >
          {label}
          {rest.required && <span className="text-red-500"> * </span>}
        </span>
      </p>
      <div
        className={`w-full flex ${notMargin ? 'mb-0' : 'mb-4'} ${className}`}
      >
        <input
          type="text"
          name="fileName"
          id="fileName"
          value={fileName}
          placeholder="Adjunte su CV"
          className="w-8/12 mt-1 px-3 py-1.5 bg-medium-blue text-font-black dark:bg-medium-gray dark:text-font-white rounded-l-lg text-sm lg:text-base border-medium-blue dark:border-medium-gray cursor-not-allowed"
          disabled
          readOnly
        />
        <label
          htmlFor={name}
          className={`
          w-4/12 mt-1 p-1.5 flex items-center justify-center text-font-white bg-primary-400 hover:bg-primary-300 dark:bg-primary-500 dark:hover:bg-primary-400 rounded-r-lg text-xs md:text-sm focus:outline-none active:bg-primary-500 dark:active:bg-primary-300 disabled:opacity-50 disabled:bg-primary-500 cursor-pointer transition-all duration-300 ease-in-out
          ${rest.disabled ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          <UploadIcon className="h-5 w-5 mr-1.5" />
          <span>Buscar</span>
          <input
            name={name}
            id={name}
            type="file"
            placeholder={placeholder || label}
            className="hidden"
            onChange={onChange}
            ref={ref}
            {...rest}
          />
        </label>
      </div>
    </>
  )
);
