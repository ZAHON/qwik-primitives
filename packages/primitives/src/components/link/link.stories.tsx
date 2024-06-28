import type { Meta, StoryObj } from 'storybook-framework-qwik';
import * as Link from '.';

const LINK_URL = 'https://github.com/ZAHON/qwik-primitives';

const meta: Meta<typeof Link.Root> = {
  title: 'Components/Link',
};

export default meta;
type Story = StoryObj<typeof Link.Root>;

export const Example: Story = {
  render: () => {
    return (
      <>
        <h2>Example</h2>
        <Link.Root href={LINK_URL}>Qwik Primitives</Link.Root>
      </>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <>
        <h2>Disabled</h2>
        <Link.Root disabled={true} href={LINK_URL}>
          Qwik Primitives
        </Link.Root>
      </>
    );
  },
};

export const External: Story = {
  render: () => {
    return (
      <>
        <h2>External</h2>
        <Link.Root external={true} href={LINK_URL}>
          Qwik Primitives
        </Link.Root>
      </>
    );
  },
};
