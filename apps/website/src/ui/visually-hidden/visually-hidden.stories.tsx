import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { VisuallyHidden } from '.';

type VisuallyHiddenRootPropsWithChildren = PropsOf<typeof VisuallyHidden.Root> & { children: string };
type Story = StoryObj<VisuallyHiddenRootPropsWithChildren>;

const meta: Meta<VisuallyHiddenRootPropsWithChildren> = {
  title: 'UI/VisuallyHidden',
  component: VisuallyHidden.Root,
  args: {
    children: 'Visually hidden',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;

export const Default: Story = {
  render: (props) => {
    const { children, ...others } = props;

    return <VisuallyHidden.Root {...others}>{children}</VisuallyHidden.Root>;
  },
};
