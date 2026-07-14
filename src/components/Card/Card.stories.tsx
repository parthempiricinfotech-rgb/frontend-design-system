import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = { title: 'Layout/Card', component: Card, args: { children: 'Card content' } } satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Interactive: Story = { args: { interactive: true } };
export const Selected: Story = { args: { selected: true } };
export const Dark: Story = { parameters: { themes: { themeOverride: 'dark' } } };
