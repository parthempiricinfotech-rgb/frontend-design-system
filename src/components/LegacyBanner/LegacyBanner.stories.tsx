import type { Meta, StoryObj } from '@storybook/react';
import { LegacyBanner } from './LegacyBanner';

const meta = { title: 'Deprecated/LegacyBanner', component: LegacyBanner, args: { children: 'Deprecated banner' } } satisfies Meta<typeof LegacyBanner>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Deprecated: Story = {};
