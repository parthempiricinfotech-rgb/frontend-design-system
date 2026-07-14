import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = { title: 'Actions/Button', component: Button, args: { children: 'Save changes' } } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { intent: 'primary' } };
export const Secondary: Story = { args: { intent: 'secondary' } };
export const Danger: Story = { args: { intent: 'danger' } };
export const Loading: Story = { args: { loading: true } };
export const Disabled: Story = { args: { disabled: true } };
