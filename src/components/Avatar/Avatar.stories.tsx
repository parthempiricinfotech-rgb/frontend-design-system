import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = { title: 'Data Display/Avatar', component: Avatar } satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Image: Story = { args: { src: 'avatar.png', alt: 'Profile photo' } };
export const Initials: Story = { args: { initials: 'PR' } };
export const Fallback: Story = { args: {} };
export const Group: Story = { args: { initials: 'DS', size: 'sm' } };
