import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import * as Heading from '.';

type HeadingProps = PropsOf<typeof Heading.Root> & { children: string };
type Story = StoryObj<HeadingProps>;

const meta: Meta<HeadingProps> = {
  title: 'Components/Heading',
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    level: '1',
  },
  argTypes: {
    children: { control: 'text' },
    level: { options: ['1', '2', '3', '4', '5', '6'], control: 'select' },
  },
};

export default meta;

export const Default: Story = {
  render: (props) => {
    const { children, ...others } = props;

    return <Heading.Root {...others}>{children}</Heading.Root>;
  },
};

export const As: Story = {
  render: (props) => {
    const { children, ...others } = props;

    const Span = component$<PropsOf<'span'>>((props) => {
      return (
        <span {...props}>
          <Slot />
        </span>
      );
    });

    const Div = component$<PropsOf<'div'>>((props) => {
      return (
        <div {...props}>
          <Slot />
        </div>
      );
    });

    return (
      <>
        <Heading.Root {...others} as={Span}>
          {children} (span)
        </Heading.Root>
        <Heading.Root {...others} as={Div}>
          {children} (div)
        </Heading.Root>
      </>
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
      <>
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
      </>
    );
  },
};
