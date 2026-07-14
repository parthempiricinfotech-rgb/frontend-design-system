import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta = { title: 'Overlays/Modal', component: Modal, args: { title: 'Confirm sync', children: 'Review the changes before continuing.' } } satisfies Meta<typeof Modal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Scrollable: Story = { args: { children: 'Long content '.repeat(80) } };
export const Destructive: Story = { args: { tone: 'destructive' } };
export const Dark: Story = { parameters: { themes: { themeOverride: 'dark' } } };
