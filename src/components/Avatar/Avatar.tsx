import React from 'react';
import '../componentStyles.css';

export type AvatarProps = {
  initials?: string;
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  shape?: 'circle' | 'square';
};

export function Avatar({ initials = 'DS', src, alt = '', size = 'md', shape = 'circle' }: AvatarProps) {
  return <span className="ds-avatar" data-size={size} data-shape={shape}>{src ? <img src={src} alt={alt} /> : initials}</span>;
}
