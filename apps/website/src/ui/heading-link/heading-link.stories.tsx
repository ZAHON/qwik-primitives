import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { HeadingLink } from '.';

type HeadingLinkPropsWithChildren = PropsOf<typeof HeadingLink.Root> & { children: string };
type Story = StoryObj<HeadingLinkPropsWithChildren>;

const meta: Meta<HeadingLinkPropsWithChildren> = {
  title: 'UI/HeadingLink',
  args: {
    children: 'API Reference',
    id: 'api-reference',
    level: '1',
    size: '6',
    highContrast: true,
  },
  argTypes: {
    children: { control: 'text' },
    level: { control: 'select', options: ['1', '2', '3', '4', '5', '6'] },
    size: { control: 'select', options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    highContrast: { control: 'boolean' },
  },
};

export default meta;

export const Default: Story = {
  render: (props) => {
    const { children, ...others } = props;

    return (
      <HeadingLink.Root {...others}>
        <HeadingLink.Content>
          {children}
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>
    );
  },
};

export const Level: Story = {
  argTypes: {
    level: { control: false },
  },
  render: (props) => {
    const { children, ...others } = props;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', rowGap: '0.75rem' }}>
        <HeadingLink.Root {...others} level="1">
          <HeadingLink.Content>
            {children}
            <HeadingLink.Icon />
          </HeadingLink.Content>
        </HeadingLink.Root>

        <HeadingLink.Root {...others} level="2">
          <HeadingLink.Content>
            {children}
            <HeadingLink.Icon />
          </HeadingLink.Content>
        </HeadingLink.Root>

        <HeadingLink.Root {...others} level="3">
          <HeadingLink.Content>
            {children}
            <HeadingLink.Icon />
          </HeadingLink.Content>
        </HeadingLink.Root>

        <HeadingLink.Root {...others} level="4">
          <HeadingLink.Content>
            {children}
            <HeadingLink.Icon />
          </HeadingLink.Content>
        </HeadingLink.Root>

        <HeadingLink.Root {...others} level="5">
          <HeadingLink.Content>
            {children}
            <HeadingLink.Icon />
          </HeadingLink.Content>
        </HeadingLink.Root>

        <HeadingLink.Root {...others} level="6">
          <HeadingLink.Content>
            {children}
            <HeadingLink.Icon />
          </HeadingLink.Content>
        </HeadingLink.Root>
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', rowGap: '0.75rem' }}>
        <HeadingLink.Root {...others} size="1">
          <HeadingLink.Content>
            {children}
            <HeadingLink.Icon />
          </HeadingLink.Content>
        </HeadingLink.Root>

        <HeadingLink.Root {...others} size="2">
          <HeadingLink.Content>
            {children}
            <HeadingLink.Icon />
          </HeadingLink.Content>
        </HeadingLink.Root>

        <HeadingLink.Root {...others} size="3">
          <HeadingLink.Content>
            {children}
            <HeadingLink.Icon />
          </HeadingLink.Content>
        </HeadingLink.Root>

        <HeadingLink.Root {...others} size="4">
          <HeadingLink.Content>
            {children}
            <HeadingLink.Icon />
          </HeadingLink.Content>
        </HeadingLink.Root>

        <HeadingLink.Root {...others} size="5">
          <HeadingLink.Content>
            {children}
            <HeadingLink.Icon />
          </HeadingLink.Content>
        </HeadingLink.Root>

        <HeadingLink.Root {...others} size="6">
          <HeadingLink.Content>
            {children}
            <HeadingLink.Icon />
          </HeadingLink.Content>
        </HeadingLink.Root>

        <HeadingLink.Root {...others} size="7">
          <HeadingLink.Content>
            {children}
            <HeadingLink.Icon />
          </HeadingLink.Content>
        </HeadingLink.Root>

        <HeadingLink.Root {...others} size="8">
          <HeadingLink.Content>
            {children}
            <HeadingLink.Icon />
          </HeadingLink.Content>
        </HeadingLink.Root>

        <HeadingLink.Root {...others} size="9">
          <HeadingLink.Content>
            {children}
            <HeadingLink.Icon />
          </HeadingLink.Content>
        </HeadingLink.Root>
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', rowGap: '0.75rem' }}>
        <HeadingLink.Root {...others} highContrast={false}>
          <HeadingLink.Content>
            {children}
            <HeadingLink.Icon />
          </HeadingLink.Content>
        </HeadingLink.Root>

        <HeadingLink.Root {...others} highContrast={true}>
          <HeadingLink.Content>
            {children}
            <HeadingLink.Icon />
          </HeadingLink.Content>
        </HeadingLink.Root>
      </div>
    );
  },
};
