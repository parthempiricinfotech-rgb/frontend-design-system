import React from 'react';
import '../componentStyles.css';

export type TooltipProps = {
  children: React.ReactNode;
  placement?: 'top' | 'right' | 'bottom' | 'left';
};

export function Tooltip({ children, placement = 'top' }: TooltipProps) {
  return <div className="ds-tooltip" data-placement={placement} role="tooltip">{children}</div>;
}
