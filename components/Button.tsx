import React from 'react';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string | React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function Button({
  onClick,
  label,
  variant,
  className,
  disabled,
}: ButtonProps) {
  const baseClasses = 'py-1 px-4 rounded-full shadow-md';

  const primaryClasses = '';
  const secondaryClasses = '';
  const tertiaryClasses = '';

  const variantClasses =
    variant === 'primary'
      ? primaryClasses
      : variant === 'secondary'
      ? secondaryClasses
      : variant === 'tertiary'
      ? tertiaryClasses
      : '';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
