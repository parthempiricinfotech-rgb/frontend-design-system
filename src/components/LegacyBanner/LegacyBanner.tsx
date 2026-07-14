import React from 'react';
import '../componentStyles.css';

export function LegacyBanner({ children }: { children: React.ReactNode }) {
  return <aside className="ds-legacy-banner">{children}</aside>;
}
