import React from 'react';
import '../componentStyles.css';

export type TabItem = { id: string; label: string; disabled?: boolean };
export type TabsProps = { items: TabItem[]; selectedId: string };

export function Tabs({ items, selectedId }: TabsProps) {
  return (
    <div className="ds-tabs" role="tablist" aria-orientation="horizontal">
      {items.map((item) => (
        <button className="ds-tab" role="tab" key={item.id} aria-selected={item.id === selectedId} disabled={item.disabled}>
          {item.label}
        </button>
      ))}
    </div>
  );
}
