import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { Badge } from '.';

type BadgeRootSize = PropsOf<typeof Badge.Root>['size'];
type BadgeRootPropsWithChildren = PropsOf<typeof Badge.Root> & { children: string };
type Story = StoryObj<BadgeRootPropsWithChildren>;

const meta: Meta<BadgeRootPropsWithChildren> = {
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

export const Default: Story = {
  render: (props) => {
    const { children, ...others } = props;

    return <Badge.Root {...others}>{children}</Badge.Root>;
  },
};

export const Size: Story = {
  argTypes: {
    size: { control: false },
  },
  render: (props) => {
    const { children, ...others } = props;

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
    const { children, ...others } = props;

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
    const { children, ...others } = props;

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
    const { children, ...others } = props;

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
    const { children, ...others } = props;

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

export const WithIcon: Story = {
  render: (props) => {
    const { size, children, ...others } = props;

    const CubeIcon = component$<{ size: BadgeRootSize }>((props) => {
      const { size } = props;

      const getIconSize = (size: BadgeRootSize) => {
        switch (size) {
          case '1': {
            return 14;
          }
          case '2': {
            return 16;
          }
          case '3': {
            return 18;
          }
          default: {
            throw Error(`Unknown variant: ${size}`);
          }
        }
      };

      return (
        <svg
          aria-hidden="true"
          focusable="false"
          width={getIconSize(size)}
          height={getIconSize(size)}
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.28856 0.796908C7.42258 0.734364 7.57742 0.734364 7.71144 0.796908L13.7114 3.59691C13.8875 3.67906 14 3.85574 14 4.05V10.95C14 11.1443 13.8875 11.3209 13.7114 11.4031L7.71144 14.2031C7.57742 14.2656 7.42258 14.2656 7.28856 14.2031L1.28856 11.4031C1.11252 11.3209 1 11.1443 1 10.95V4.05C1 3.85574 1.11252 3.67906 1.28856 3.59691L7.28856 0.796908ZM2 4.80578L7 6.93078V12.9649L2 10.6316V4.80578ZM8 12.9649L13 10.6316V4.80578L8 6.93078V12.9649ZM7.5 6.05672L12.2719 4.02866L7.5 1.80176L2.72809 4.02866L7.5 6.05672Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      );
    });

    return (
      <Badge.Root {...others} size={size}>
        <CubeIcon size={size} />
        {children}
      </Badge.Root>
    );
  },
};
