import React from 'react';
import '../componentStyles.css';

export type CardProps = {
  children: React.ReactNode;
  elevation?: 'none' | 'raised';
  interactive?: boolean;
  selected?: boolean;
};

export function Card({ children, elevation = 'none', interactive = false, selected = false }: CardProps) {
  return (
    <article className="ds-card" data-elevation={elevation} data-interactive={interactive} aria-selected={selected || undefined}>
      {children}
    </article>
  );
}
