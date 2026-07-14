import React from 'react';
import '../componentStyles.css';

export type ModalProps = {
  title: string;
  children: React.ReactNode;
  tone?: 'default' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
};

export function Modal({ title, children, tone = 'default', size = 'md' }: ModalProps) {
  return (
    <div className="ds-modal-backdrop" role="presentation">
      <section className="ds-modal-panel" role="dialog" aria-modal="true" aria-label={title} data-tone={tone} data-size={size}>
        <h2>{title}</h2>
        {children}
      </section>
    </div>
  );
}
