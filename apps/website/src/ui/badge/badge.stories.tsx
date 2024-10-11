import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { Badge } from '.';

const meta: Meta<typeof Badge.Root> = {
  title: 'UI/Badge',
  component: Badge.Root,
  args: {
    children: 'Badge',
    size: '1',
    variant: 'soft',
    color: 'primary',
  },
  argTypes: {
    children: { control: 'text' },
    size: { options: ['1', '2', '3'], control: 'select' },
    variant: { options: ['solid', 'soft'], control: 'select' },
    color: { options: ['default', 'primary'], control: 'select' },
    radius: { options: ['none', 'small', 'medium', 'large', 'full'], control: 'select' },
    highContrast: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Badge.Root>;
type BadgeRootPropsWithChildren = typeof Badge.Root & { children: string };

export const Default: Story = {
  render: (props) => {
    const { children, ...others } = props as BadgeRootPropsWithChildren;

    return <Badge.Root {...others}>{children}</Badge.Root>;
  },
};

export const Size: Story = {
  argTypes: {
    size: { control: false },
  },
  render: (props) => {
    const { children, ...others } = props as BadgeRootPropsWithChildren;

    return (
      <div style={{ display: 'flex', alignItems: 'end', columnGap: '0.75rem' }}>
        <Badge.Root {...others} size="1">
          {children}
        </Badge.Root>
        <Badge.Root {...others} size="2">
          {children}
        </Badge.Root>
        <Badge.Root {...others} size="3">
          {children}
        </Badge.Root>
      </div>
    );
  },
};

export const Variant: Story = {
  argTypes: {
    variant: { control: false },
  },
  render: (props) => {
    const { children, ...others } = props as BadgeRootPropsWithChildren;

    return (
      <div style={{ display: 'flex', columnGap: '0.75rem' }}>
        <Badge.Root {...others} variant="solid">
          {children}
        </Badge.Root>
        <Badge.Root {...others} variant="soft">
          {children}
        </Badge.Root>
      </div>
    );
  },
};

export const Color: Story = {
  argTypes: {
    color: { control: false },
  },
  render: (props) => {
    const { children, ...others } = props as BadgeRootPropsWithChildren;

    return (
      <div style={{ display: 'flex', columnGap: '0.75rem' }}>
        <Badge.Root {...others} color="default">
          {children}
        </Badge.Root>
        <Badge.Root {...others} color="primary">
          {children}
        </Badge.Root>
      </div>
    );
  },
};

export const HighContrast: Story = {
  argTypes: {
    highContrast: { control: false },
  },
  render: (props) => {
    const { children, ...others } = props as BadgeRootPropsWithChildren;

    return (
      <div style={{ display: 'flex', columnGap: '0.75rem' }}>
        <Badge.Root {...others} highContrast={false}>
          {children}
        </Badge.Root>
        <Badge.Root {...others} highContrast={true}>
          {children}
        </Badge.Root>
      </div>
    );
  },
};

export const Radius: Story = {
  argTypes: {
    radius: { control: false },
  },
  render: (props) => {
    const { children, ...others } = props as BadgeRootPropsWithChildren;

    return (
      <div style={{ display: 'flex', columnGap: '0.75rem' }}>
        <Badge.Root {...others} radius="none">
          {children}
        </Badge.Root>
        <Badge.Root {...others} radius="small">
          {children}
        </Badge.Root>
        <Badge.Root {...others} radius="medium">
          {children}
        </Badge.Root>
        <Badge.Root {...others} radius="large">
          {children}
        </Badge.Root>
        <Badge.Root {...others} radius="full">
          {children}
        </Badge.Root>
      </div>
    );
  },
};
