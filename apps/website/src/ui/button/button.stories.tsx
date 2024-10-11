import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { Button } from '.';

type ButtonRootSize = PropsOf<typeof Button.Root>['size'];
type ButtonRootPropsWithChildren = PropsOf<typeof Button.Root> & { children: string };
type Story = StoryObj<ButtonRootPropsWithChildren>;

const meta: Meta<ButtonRootPropsWithChildren> = {
  title: 'UI/Button',
  component: Button.Root,
  args: {
    children: 'Button',
    shape: 'button',
    size: '2',
    variant: 'solid',
    color: 'primary',
    type: 'button',
  },
  argTypes: {
    children: { control: 'text' },
    shape: { options: ['button', 'icon'], control: 'select' },
    size: { options: ['1', '2', '3', '4'], control: 'select' },
    variant: { options: ['solid', 'soft', 'ghost'], control: 'select' },
    color: { options: ['default', 'primary'], control: 'select' },
    radius: { options: ['none', 'small', 'medium', 'large', 'full'], control: 'select' },
    highContrast: { control: 'boolean' },
    type: { options: ['submit', 'reset', 'button'], control: 'select' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

const StarIcon = component$<{ size: ButtonRootSize }>((props) => {
  const { size } = props;

  const getIconSize = (size: ButtonRootSize) => {
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
      case '4': {
        return 20;
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
        d="M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.9647 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.705 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.803 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171ZM7.50003 2.60397L6.50994 4.98442C6.32273 5.43453 5.89944 5.74207 5.41351 5.78103L2.84361 5.98705L4.8016 7.66428C5.17183 7.98142 5.33351 8.47903 5.2204 8.95321L4.62221 11.461L6.8224 10.1171C7.23842 9.86302 7.76164 9.86302 8.17766 10.1171L10.3778 11.461L9.77965 8.95321C9.66654 8.47903 9.82822 7.98142 10.1984 7.66428L12.1564 5.98705L9.58654 5.78103C9.10061 5.74207 8.67732 5.43453 8.49011 4.98442L7.50003 2.60397Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

export const Default: Story = {
  render: (props) => {
    const { children, shape, size, ...others } = props;

    return (
      <>
        {shape === 'button' && (
          <Button.Root {...others} shape="button" size={size}>
            {children}
          </Button.Root>
        )}
        {shape === 'icon' && (
          <Button.Root {...others} shape="icon" size={size}>
            <StarIcon size={size} />
          </Button.Root>
        )}
      </>
    );
  },
};

export const Disabled: Story = {
  argTypes: {
    disabled: { control: false },
  },
  render: (props) => {
    const { children, shape, size, ...others } = props;

    return (
      <>
        {shape === 'button' && (
          <Button.Root {...others} shape="button" size={size} disabled={true}>
            {children}
          </Button.Root>
        )}
        {shape === 'icon' && (
          <Button.Root {...others} shape="icon" size={size} disabled={true}>
            <StarIcon size={size} />
          </Button.Root>
        )}
      </>
    );
  },
};

export const Size: Story = {
  argTypes: {
    size: { control: false },
  },
  render: (props) => {
    const { children, shape, ...others } = props;

    return (
      <div style={{ display: 'flex', alignItems: 'end', columnGap: '0.75rem' }}>
        {shape === 'button' && (
          <>
            <Button.Root {...others} shape="button" size="1">
              {children}
            </Button.Root>
            <Button.Root {...others} shape="button" size="2">
              {children}
            </Button.Root>
            <Button.Root {...others} shape="button" size="3">
              {children}
            </Button.Root>
            <Button.Root {...others} shape="button" size="4">
              {children}
            </Button.Root>
          </>
        )}
        {shape === 'icon' && (
          <>
            <Button.Root {...others} shape="icon" size="1">
              <StarIcon size="1" />
            </Button.Root>
            <Button.Root {...others} shape="icon" size="2">
              <StarIcon size="2" />
            </Button.Root>
            <Button.Root {...others} shape="icon" size="3">
              <StarIcon size="3" />
            </Button.Root>
            <Button.Root {...others} shape="icon" size="4">
              <StarIcon size="4" />
            </Button.Root>
          </>
        )}
      </div>
    );
  },
};

export const Variant: Story = {
  argTypes: {
    variant: { control: false },
  },
  render: (props) => {
    const { children, shape, size, ...others } = props;

    return (
      <div style={{ display: 'flex', columnGap: '0.75rem' }}>
        {shape === 'button' && (
          <>
            <Button.Root {...others} shape="button" size={size} variant="solid">
              {children}
            </Button.Root>
            <Button.Root {...others} shape="button" size={size} variant="soft">
              {children}
            </Button.Root>
            <Button.Root {...others} shape="button" size={size} variant="ghost">
              {children}
            </Button.Root>
          </>
        )}
        {shape === 'icon' && (
          <>
            <Button.Root {...others} shape="icon" size={size} variant="solid">
              <StarIcon size={size} />
            </Button.Root>
            <Button.Root {...others} shape="icon" size={size} variant="soft">
              <StarIcon size={size} />
            </Button.Root>
            <Button.Root {...others} shape="icon" size={size} variant="ghost">
              <StarIcon size={size} />
            </Button.Root>
          </>
        )}
      </div>
    );
  },
};

export const Color: Story = {
  argTypes: {
    variant: { control: false },
  },
  render: (props) => {
    const { children, shape, size, ...others } = props;

    return (
      <div style={{ display: 'flex', columnGap: '0.75rem' }}>
        {shape === 'button' && (
          <>
            <Button.Root {...others} shape="button" size={size} color="default">
              {children}
            </Button.Root>
            <Button.Root {...others} shape="button" size={size} color="primary">
              {children}
            </Button.Root>
          </>
        )}
        {shape === 'icon' && (
          <>
            <Button.Root {...others} shape="icon" size={size} color="default">
              <StarIcon size={size} />
            </Button.Root>
            <Button.Root {...others} shape="icon" size={size} color="primary">
              <StarIcon size={size} />
            </Button.Root>
          </>
        )}
      </div>
    );
  },
};

export const HighContrast: Story = {
  argTypes: {
    highContrast: { control: false },
  },
  render: (props) => {
    const { children, shape, size, ...others } = props;

    return (
      <div style={{ display: 'flex', columnGap: '0.75rem' }}>
        {shape === 'button' && (
          <>
            <Button.Root {...others} shape="button" size={size} highContrast={false}>
              {children}
            </Button.Root>
            <Button.Root {...others} shape="button" size={size} highContrast={true}>
              {children}
            </Button.Root>
          </>
        )}
        {shape === 'icon' && (
          <>
            <Button.Root {...others} shape="icon" size={size} highContrast={false}>
              <StarIcon size={size} />
            </Button.Root>
            <Button.Root {...others} shape="icon" size={size} highContrast={true}>
              <StarIcon size={size} />
            </Button.Root>
          </>
        )}
      </div>
    );
  },
};

export const Radius: Story = {
  argTypes: {
    radius: { control: false },
  },
  render: (props) => {
    const { children, shape, size, ...others } = props;

    return (
      <div style={{ display: 'flex', columnGap: '0.75rem' }}>
        {shape === 'button' && (
          <>
            <Button.Root {...others} shape="button" size={size} radius="none">
              {children}
            </Button.Root>
            <Button.Root {...others} shape="button" size={size} radius="small">
              {children}
            </Button.Root>
            <Button.Root {...others} shape="button" size={size} radius="medium">
              {children}
            </Button.Root>
            <Button.Root {...others} shape="button" size={size} radius="large">
              {children}
            </Button.Root>
            <Button.Root {...others} shape="button" size={size} radius="full">
              {children}
            </Button.Root>
          </>
        )}
        {shape === 'icon' && (
          <>
            <Button.Root {...others} shape="icon" size={size} radius="none">
              <StarIcon size={size} />
            </Button.Root>
            <Button.Root {...others} shape="icon" size={size} radius="small">
              <StarIcon size={size} />
            </Button.Root>
            <Button.Root {...others} shape="icon" size={size} radius="medium">
              <StarIcon size={size} />
            </Button.Root>
            <Button.Root {...others} shape="icon" size={size} radius="large">
              <StarIcon size={size} />
            </Button.Root>
            <Button.Root {...others} shape="icon" size={size} radius="full">
              <StarIcon size={size} />
            </Button.Root>
          </>
        )}
      </div>
    );
  },
};

export const ShapeButtonWithIcon: Story = {
  argTypes: {
    shape: { control: false },
  },
  render: (props) => {
    const { children, size, ...others } = props;

    return (
      <Button.Root {...others} shape="button" size={size}>
        <StarIcon size={size} />
        {children}
      </Button.Root>
    );
  },
};
