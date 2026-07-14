import React from 'react';
import '../componentStyles.css';

export type ButtonProps = {
  children: React.ReactNode;
  intent?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, intent = 'primary', size = 'md', loading = false, disabled, ...props }: ButtonProps) {
  return (
    <button className="ds-button" data-intent={intent} data-size={size} disabled={disabled || loading} aria-busy={loading || undefined} {...props}>
      {loading ? 'Loading' : children}
    </button>
  );
}
