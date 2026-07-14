import React from 'react';
import '../componentStyles.css';

export type ToggleProps = {
  checked?: boolean;
  disabled?: boolean;
  label: string;
};

export function Toggle({ checked = false, disabled = false, label }: ToggleProps) {
  return (
    <button className="ds-toggle" data-checked={checked} aria-pressed={checked} aria-label={label} disabled={disabled}>
      <span className="ds-toggle__knob" />
    </button>
  );
}
