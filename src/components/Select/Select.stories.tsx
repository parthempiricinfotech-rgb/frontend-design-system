import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = { title: 'Forms/Select', component: Select, args: { label: 'Component', options: ['Button', 'Input', 'Card'] } } satisfies Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {};
export const Open: Story = { args: { state: 'open' } };
export const Disabled: Story = { args: { state: 'disabled' } };
export const Error: Story = { args: { state: 'error' } };
export const Empty: Story = { args: { state: 'empty', options: [] } };
