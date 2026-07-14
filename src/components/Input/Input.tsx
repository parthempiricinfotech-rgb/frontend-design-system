import React from 'react';
import '../componentStyles.css';

export type InputProps = {
  label: string;
  state?: 'default' | 'error' | 'success';
  size?: 'sm' | 'md';
  hint?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, state = 'default', size = 'md', hint, ...props }: InputProps) {
  return (
    <label className="ds-field">
      <span className="ds-label">{label}</span>
      <input className="ds-input" data-state={state} data-size={size} aria-invalid={state === 'error' || undefined} {...props} />
      {hint ? <span className="ds-label">{hint}</span> : null}
    </label>
  );
}
