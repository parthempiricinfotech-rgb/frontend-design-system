import React from 'react';
import '../componentStyles.css';

export type BadgeProps = {
  children: React.ReactNode;
  tone?: 'neutral' | 'success' | 'warning' | 'danger';
  size?: 'compact' | 'default';
};

export function Badge({ children, tone = 'neutral', size = 'default' }: BadgeProps) {
  return <span className="ds-badge" data-tone={tone} data-size={size}>{children}</span>;
}
