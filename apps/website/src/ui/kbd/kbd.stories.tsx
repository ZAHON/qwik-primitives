import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { Text } from '@/ui/text';
import { Kbd } from '.';

type KbdRootPropsWithChildren = PropsOf<typeof Kbd.Root> & { children: string };
type Story = StoryObj<KbdRootPropsWithChildren>;

const meta: Meta<KbdRootPropsWithChildren> = {
  title: 'UI/Kbd',
  component: Kbd.Root,
  args: {
    children: 'Shift + Tab',
  },
  argTypes: {
    children: { control: 'text' },
    size: { options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], control: 'select' },
  },
};

export default meta;

export const Default: Story = {
  render: (props) => {
    const { children, ...others } = props;

    return <Kbd.Root {...others}>{children}</Kbd.Root>;
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
        <Kbd.Root {...others} size="1">
          {children}
        </Kbd.Root>
        <Kbd.Root {...others} size="2">
          {children}
        </Kbd.Root>
        <Kbd.Root {...others} size="3">
          {children}
        </Kbd.Root>
        <Kbd.Root {...others} size="4">
          {children}
        </Kbd.Root>
        <Kbd.Root {...others} size="5">
          {children}
        </Kbd.Root>
        <Kbd.Root {...others} size="6">
          {children}
        </Kbd.Root>
        <Kbd.Root {...others} size="7">
          {children}
        </Kbd.Root>
        <Kbd.Root {...others} size="8">
          {children}
        </Kbd.Root>
        <Kbd.Root {...others} size="9">
          {children}
        </Kbd.Root>
      </div>
    );
  },
};

export const InsideText: Story = {
  render: (props) => {
    const { children, ...others } = props;

    return (
      <Text.Root>
        Lorem ipsum dolor sit amet <Kbd.Root {...others}>{children}</Kbd.Root> adipisicing elit. Libero inventore sint
        esse, quidem ipsa a ea velit asperiores ullam maxime quis blanditiis illum officiis quod porro impedit nulla
        vero quisquam aliquid, odio officia, saepe totam accusantium. Voluptas beatae{' '}
        <Kbd.Root {...others}>{children}</Kbd.Root> voluptate iusto inventore doloribus rem, perspiciatis, laborum, quis{' '}
        <Kbd.Root {...others}>{children}</Kbd.Root> labore. Fuga debitis nostrum voluptate laboriosam maiores molestiae
        rem architecto quae accusantium quam sint fugit, reiciendis amet odio? Dolorum aliquam quasi, veniam pariatur ad
        nobis ducimus porro quod repellendus maxime autem, rerum nisi architecto sunt facere eos. Alias rerum{' '}
        <Kbd.Root {...others}>{children}</Kbd.Root> qui commodi provident, possimus eius veniam, expedita voluptas,
        deleniti mollitia amet id.
      </Text.Root>
    );
  },
};
