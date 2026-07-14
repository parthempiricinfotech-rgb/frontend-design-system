import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const items = [{ id: 'overview', label: 'Overview' }, { id: 'usage', label: 'Usage' }, { id: 'disabled', label: 'Disabled', disabled: true }];
const meta = { title: 'Navigation/Tabs', component: Tabs, args: { items, selectedId: 'overview' } } satisfies Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Scrollable: Story = { args: { items: [...items, { id: 'release', label: 'Release notes' }] } };
export const KeyboardNavigation: Story = {};
