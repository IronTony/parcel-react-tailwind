import clsx from 'clsx';
import { useMemo } from 'react';

export interface ButtonProps {
  disabled?: boolean;

  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Button: React.FC<ButtonProps> = ({ children, disabled = false, onClick }) => {
  const classes = useMemo(
    () =>
      clsx(
        'min-w-full sm:min-w-24 min-h-9 rounded-lg px-4 py-2 text-white text-center select-none',
        {
          'bg-blue-500': !disabled,
          'hover:bg-blue-800': !disabled,
          'cursor-pointer': !disabled,
          'bg-gray-500': disabled,
          'cursor-default': disabled,
        }
      ),
    [disabled]
  );

  return (
    <div onClick={!disabled ? onClick : undefined} className={classes}>
      {children}
    </div>
  );
};
