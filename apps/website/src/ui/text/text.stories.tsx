import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { Text } from '.';

type TextRootPropsWithChildren = PropsOf<typeof Text.Root> & { children: string };
type Story = StoryObj<TextRootPropsWithChildren>;

const meta: Meta<TextRootPropsWithChildren> = {
  title: 'UI/Text',
  component: Text.Root,
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    size: '3',
    highContrast: true,
  },
  argTypes: {
    children: { control: 'text' },
    size: { options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], control: 'select' },
    highContrast: { control: 'boolean' },
  },
};

export default meta;

export const Default: Story = {
  render: (props) => {
    const { children, ...others } = props;

    return <Text.Root {...others}>{children}</Text.Root>;
  },
};

export const Size: Story = {
  argTypes: {
    size: { control: false },
  },
  render: (props) => {
    const { children, ...others } = props;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
        <Text.Root {...others} size="1">
          {children}
        </Text.Root>
        <Text.Root {...others} size="2">
          {children}
        </Text.Root>
        <Text.Root {...others} size="3">
          {children}
        </Text.Root>
        <Text.Root {...others} size="4">
          {children}
        </Text.Root>
        <Text.Root {...others} size="5">
          {children}
        </Text.Root>
        <Text.Root {...others} size="6">
          {children}
        </Text.Root>
        <Text.Root {...others} size="7">
          {children}
        </Text.Root>
        <Text.Root {...others} size="8">
          {children}
        </Text.Root>
        <Text.Root {...others} size="9">
          {children}
        </Text.Root>
      </div>
    );
  },
};

export const HighContrast: Story = {
  argTypes: {
    highContrast: { control: false },
  },
  render: (props) => {
    const { children, ...others } = props;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
        <Text.Root {...others} highContrast={false}>
          {children}
        </Text.Root>
        <Text.Root {...others} highContrast={true}>
          {children}
        </Text.Root>
      </div>
    );
  },
};
