import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import * as AccessibleIcon from '.';

const CrossIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg viewBox="0 0 32 32" width={24} height={24} fill="none" stroke="currentColor" {...props}>
      <path d="M2 30 L30 2 M30 30 L2 2" />
    </svg>
  );
});

const meta: Meta<typeof AccessibleIcon.Root> = {
  title: 'Components/AccessibleIcon',
};

export default meta;
type Story = StoryObj<typeof AccessibleIcon.Root>;

export const Example: Story = {
  render: () => {
    return (
      <button type="button">
        <AccessibleIcon.Root as={CrossIcon} label="Close" />
      </button>
    );
  },
};
