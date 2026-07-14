import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta = { title: 'Forms/Toggle', component: Toggle, args: { label: 'Enable sync' } } satisfies Meta<typeof Toggle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {};
export const Checked: Story = { args: { checked: true } };
export const Disabled: Story = { args: { disabled: true } };
export const Focus: Story = { args: { checked: true } };
