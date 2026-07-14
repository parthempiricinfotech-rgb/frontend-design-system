import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta = { title: 'Overlays/Tooltip', component: Tooltip, args: { children: 'Helpful context' } } satisfies Meta<typeof Tooltip>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = { args: { placement: 'top' } };
export const Right: Story = { args: { placement: 'right' } };
export const Bottom: Story = { args: { placement: 'bottom' } };
export const Left: Story = { args: { placement: 'left' } };
export const ReducedMotion: Story = { parameters: { media: { prefersReducedMotion: true } } };
