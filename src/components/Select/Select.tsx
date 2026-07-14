import React from 'react';
import '../componentStyles.css';

export type SelectProps = {
  label: string;
  state?: 'default' | 'open' | 'disabled' | 'error' | 'empty';
  options: string[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ label, state = 'default', options, ...props }: SelectProps) {
  return (
    <label className="ds-field">
      <span className="ds-label">{label}</span>
      <select className="ds-select" data-state={state} aria-invalid={state === 'error' || undefined} disabled={state === 'disabled'} {...props}>
        {state === 'empty' ? <option>No options</option> : options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}
