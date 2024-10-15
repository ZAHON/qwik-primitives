import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { Text } from '@/ui/text';
import { Link } from '@/ui/link';
import { Code } from '.';

type CodeRootPropsWithChildren = PropsOf<typeof Code.Root> & { children: string };
type Story = StoryObj<CodeRootPropsWithChildren>;

const meta: Meta<CodeRootPropsWithChildren> = {
  title: 'UI/Code',
  component: Code.Root,
  args: {
    children: 'console.log()',
    variant: 'soft',
    color: 'primary',
  },
  argTypes: {
    children: { control: 'text' },
    size: { options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], control: 'select' },
    variant: { options: ['solid', 'soft'], control: 'select' },
    color: { options: ['default', 'primary'], control: 'select' },
    highContrast: { control: 'boolean' },
  },
};

export default meta;

export const Default: Story = {
  render: (props) => {
    const { children, ...others } = props;

    return <Code.Root {...others}>{children}</Code.Root>;
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
        <Code.Root {...others} size="1">
          {children}
        </Code.Root>
        <Code.Root {...others} size="2">
          {children}
        </Code.Root>
        <Code.Root {...others} size="3">
          {children}
        </Code.Root>
        <Code.Root {...others} size="4">
          {children}
        </Code.Root>
        <Code.Root {...others} size="5">
          {children}
        </Code.Root>
        <Code.Root {...others} size="6">
          {children}
        </Code.Root>
        <Code.Root {...others} size="7">
          {children}
        </Code.Root>
        <Code.Root {...others} size="8">
          {children}
        </Code.Root>
        <Code.Root {...others} size="9">
          {children}
        </Code.Root>
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', rowGap: '0.75rem' }}>
        <Code.Root {...others} variant="solid">
          {children}
        </Code.Root>
        <Code.Root {...others} variant="soft">
          {children}
        </Code.Root>
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', rowGap: '0.75rem' }}>
        <Code.Root {...others} color="default">
          {children}
        </Code.Root>
        <Code.Root {...others} color="primary">
          {children}
        </Code.Root>
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
        <Code.Root {...others} highContrast={false}>
          {children}
        </Code.Root>
        <Code.Root {...others} highContrast={true}>
          {children}
        </Code.Root>
      </div>
    );
  },
};

export const InsideText: Story = {
  render: (props) => {
    const { children, ...others } = props;

    return (
      <Text.Root>
        Lorem ipsum dolor sit amet <Code.Root {...others}>{children}</Code.Root> adipisicing elit. Libero inventore sint
        esse, quidem ipsa a ea velit asperiores ullam maxime quis blanditiis illum officiis quod porro impedit nulla
        vero quisquam aliquid, odio officia, saepe totam accusantium. Voluptas beatae{' '}
        <Code.Root {...others}>{children}</Code.Root> voluptate iusto inventore doloribus rem, perspiciatis, laborum,
        quis <Code.Root {...others}>{children}</Code.Root> labore. Fuga debitis nostrum voluptate laboriosam maiores
        molestiae rem architecto quae accusantium quam sint fugit, reiciendis amet odio? Dolorum aliquam quasi, veniam
        pariatur ad nobis ducimus porro quod repellendus maxime autem, rerum nisi architecto sunt facere eos. Alias
        rerum <Code.Root {...others}>{children}</Code.Root> qui commodi provident, possimus eius veniam, expedita
        voluptas, deleniti mollitia amet id.
      </Text.Root>
    );
  },
};

export const InsideLink: Story = {
  render: (props) => {
    const { children, ...others } = props;

    return (
      <Link.Root href="#">
        <Code.Root {...others}>{children}</Code.Root>
      </Link.Root>
    );
  },
};
