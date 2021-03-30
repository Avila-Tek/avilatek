import React, {
  ChangeEvent,
  InputHTMLAttributes,
  DetailedHTMLProps,
} from 'react';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >,
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
> & {
  placeholder?: string;
  name: string;
  type: string;
  value: string | number | boolean;
  label?: string;
  className?: string;
  extraClass?: string;
  marginBottom?: boolean;
  onChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  ref?: React.RefObject<any>;
  children?: Array<React.ReactChild> | React.ReactChild | any;
};

export default function Input({
  placeholder,
  name,
  type,
  value,
  label,
  onChange,
  className,
  extraClass,
  children,
  ref = null,
  marginBottom = true,
  ...rest
}: InputProps) {
  if (type === 'textarea') {
    return (
      <div className={`${className} ${marginBottom ? ' mb-5 ' : ' '}`}>
        {label && (
          <label
            htmlFor={name}
            className={`w-full block mb-1 font-bold text-sm lg:text-base text-primary-500`}
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          rows={4}
          className={`
          bg-medium-blue text-font-black rounded-lg px-2 py-1.5 w-full leading-tight outline-none text-sm lg:text-base border-medium-blue focus:border-2 focus:border-primary-300 disabled:opacity-75
            ${extraClass}`}
          onKeyPress={(e) => {
            if (e.key === 'Enter') e.preventDefault();
          }}
        />
      </div>
    );
  }

  if (type === 'select') {
    return (
      <div className={`${className} ${marginBottom ? ' mb-5 ' : ' '}`}>
        {label && (
          <label
            htmlFor={name}
            className={`w-full block mb-1 font-bold text-sm lg:text-base text-primary-500`}
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          name={name}
          id={name}
          onChange={onChange}
          value={value}
          className={`
          bg-medium-blue text-font-black rounded-lg px-2 py-1.5 w-full leading-tight outline-none text-sm lg:text-base border-medium-blue focus:border-2 focus:border-primary-300 disabled:opacity-75
            ${extraClass}`}
        >
          {children}
        </select>
      </div>
    );
  }

  return (
    <div className={`${className} ${marginBottom ? ' mb-5 ' : ' '}`}>
      {label && (
        <label
          htmlFor={name}
          className={`w-full block mb-1 font-bold text-sm lg:text-base text-primary-500`}
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`
          bg-medium-blue text-font-black rounded-lg px-2 py-1.5 w-full leading-tight outline-none text-sm lg:text-base border-medium-blue focus:border-2 focus:border-primary-300 disabled:opacity-75
            ${extraClass}`}
        onKeyPress={(e) => {
          if (e.key === 'Enter') e.preventDefault();
        }}
        {...rest}
      />
    </div>
  );
}
