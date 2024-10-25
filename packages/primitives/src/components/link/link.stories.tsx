import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import * as Link from '.';

type LinkProps = PropsOf<typeof Link.Root> & { children: string };
type Story = StoryObj<LinkProps>;

const meta: Meta<LinkProps> = {
  title: 'Components/Link',
  args: {
    children: 'Qwik Primitives',
    href: 'https://github.com/ZAHON/qwik-primitives',
    disabled: undefined,
  },
  argTypes: {
    children: { control: 'text' },
    href: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default: Story = {
  render: (props) => {
    const { children, ...others } = props;

    return <Link.Root {...others}>{children}</Link.Root>;
  },
};

export const Disabled: Story = {
  argTypes: {
    disabled: { control: false },
  },
  render: (props) => {
    const { children, ...others } = props;

    return (
      <Link.Root {...others} disabled={true}>
        {children}
      </Link.Root>
    );
  },
};
