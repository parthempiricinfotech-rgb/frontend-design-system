import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = { title: 'Status/Badge', component: Badge, args: { children: 'Status' } } satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = { args: { tone: 'neutral' } };
export const Success: Story = { args: { tone: 'success' } };
export const Warning: Story = { args: { tone: 'warning' } };
export const Danger: Story = { args: { tone: 'danger' } };
export const Compact: Story = { args: { size: 'compact' } };
