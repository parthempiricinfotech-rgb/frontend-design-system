import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = { title: 'Forms/Input', component: Input, args: { label: 'Email', placeholder: 'name@example.com' } } satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
export const Error: Story = { args: { state: 'error', hint: 'Enter a valid email.' } };
export const Success: Story = { args: { state: 'success', hint: 'Looks good.' } };
export const WithHint: Story = { args: { hint: 'Use your work email.' } };
