import React from 'react';
import useTheme from '../../hooks/useTheme';

interface ClickableLabelProps {
  title?: string;
  onClick?: any;
  id?: string;
}

function ClickableLabel({ title, onClick, id }: ClickableLabelProps) {
  return (
    <label
      onClick={() => onClick(title)}
      className={`switch-label relative z-20 capitalize float-left w-12 leading-6 sm:leading-6 text-2xs sm:text-xs text-center text-neutral-400 dark:text-neutral-300 cursor-pointer ${id}`}
    >
      {title}
    </label>
  );
}

interface ConcealedRadioProps {
  value?: string;
  selected?: string;
}

function ConcealedRadio({ selected, value }: ConcealedRadioProps) {
  return (
    <input
      type="radio"
      name={value}
      checked={selected === value}
      className="concealed-radio hidden"
      readOnly
    />
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  const values = ['light', 'dark', 'auto'];
  const [position, setPosition] = React.useState(0);

  const changeTheme = (value: string) => {
    setTheme(value);
  };

  React.useEffect(() => {
    setPosition((values.indexOf(theme) / 3) * 100);
  });

  return (
    <div className="relative h-6 w-36 rounded-full bg-dark-blue dark:bg-dark bg-opacity-25 dark:bg-opacity-40">
      {values.map((value) => (
        <span key={value}>
          <ConcealedRadio value={value} selected={theme} />
          <ClickableLabel title={value} onClick={changeTheme} />
        </span>
      ))}
      <span
        style={{ left: `${position}%` }}
        className="block absolute z-10 top-0 left-0 w-12 h-6 bg-primary-400 rounded-full transition-all duration-200 ease-out"
      />
    </div>
  );
}
