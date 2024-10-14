import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { Heading } from '.';

type HeadingRootPropsWithChildren = PropsOf<typeof Heading.Root> & { children: string };
type Story = StoryObj<HeadingRootPropsWithChildren>;

const meta: Meta<HeadingRootPropsWithChildren> = {
  title: 'UI/Heading',
  component: Heading.Root,
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    level: '1',
    size: '6',
    highContrast: true,
  },
  argTypes: {
    children: { control: 'text' },
    level: { options: ['1', '2', '3', '4', '5', '6'], control: 'select' },
    size: { options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], control: 'select' },
    highContrast: { control: 'boolean' },
  },
};

export default meta;

export const Default: Story = {
  render: (props) => {
    const { children, ...others } = props;

    return <Heading.Root {...others}>{children}</Heading.Root>;
  },
};

export const Level: Story = {
  argTypes: {
    level: { control: false },
  },
  render: (props) => {
    const { children, ...others } = props;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
        <Heading.Root {...others} level="1">
          {children}
        </Heading.Root>
        <Heading.Root {...others} level="2">
          {children}
        </Heading.Root>
        <Heading.Root {...others} level="3">
          {children}
        </Heading.Root>
        <Heading.Root {...others} level="4">
          {children}
        </Heading.Root>
        <Heading.Root {...others} level="5">
          {children}
        </Heading.Root>
        <Heading.Root {...others} level="6">
          {children}
        </Heading.Root>
      </div>
    );
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
        <Heading.Root {...others} size="1">
          {children}
        </Heading.Root>
        <Heading.Root {...others} size="2">
          {children}
        </Heading.Root>
        <Heading.Root {...others} size="3">
          {children}
        </Heading.Root>
        <Heading.Root {...others} size="4">
          {children}
        </Heading.Root>
        <Heading.Root {...others} size="5">
          {children}
        </Heading.Root>
        <Heading.Root {...others} size="6">
          {children}
        </Heading.Root>
        <Heading.Root {...others} size="7">
          {children}
        </Heading.Root>
        <Heading.Root {...others} size="8">
          {children}
        </Heading.Root>
        <Heading.Root {...others} size="9">
          {children}
        </Heading.Root>
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
        <Heading.Root {...others} highContrast={false}>
          {children}
        </Heading.Root>
        <Heading.Root {...others} highContrast={true}>
          {children}
        </Heading.Root>
      </div>
    );
  },
};
