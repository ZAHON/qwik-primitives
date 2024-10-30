import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { Code } from '@/ui/code';
import { Fonts } from '.';

type Props = { children: string; fontSize: string };
type Story = StoryObj<Props>;

const meta: Meta<Props> = {
  title: 'COMPONENTS/Fonts',
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    fontSize: '1rem',
  },
  argTypes: {
    children: { control: 'text' },
    fontSize: {
      options: ['0.75rem', '0.875rem', '1rem', '1.125rem', '1.25rem', '1.5rem', '1.75rem', '2.1875rem', '3.75rem'],
      control: 'select',
      name: 'font size',
    },
  },
};

export default meta;

export const Preview: Story = {
  render: (props) => {
    const { children, fontSize } = props;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
        <Fonts />
        <div>
          <Code.Root>Geist Sans 400</Code.Root>
          <p style={{ fontFamily: 'Geist Sans', fontWeight: 400, fontSize }}>{children}</p>
        </div>
        <div>
          <Code.Root>Geist Sans 500</Code.Root>
          <p style={{ fontFamily: 'Geist Sans', fontWeight: 500, fontSize }}>{children}</p>
        </div>
        <div>
          <Code.Root>Geist Sans 700</Code.Root>
          <p style={{ fontFamily: 'Geist Sans', fontWeight: 700, fontSize }}>{children}</p>
        </div>
        <div>
          <Code.Root>Geist Mono 400</Code.Root>
          <p style={{ fontFamily: 'Geist Mono', fontWeight: 400, fontSize }}>{children}</p>
        </div>
      </div>
    );
  },
};

export const GeistSans400: Story = {
  render: (props) => {
    const { children, fontSize } = props;

    return (
      <>
        <Fonts />
        <p style={{ fontFamily: 'Geist Sans', fontWeight: 400, fontSize }}>{children}</p>
      </>
    );
  },
};

export const GeistSans500: Story = {
  render: (props) => {
    const { children, fontSize } = props;

    return (
      <>
        <Fonts />
        <p style={{ fontFamily: 'Geist Sans', fontWeight: 500, fontSize }}>{children}</p>
      </>
    );
  },
};

export const GeistSans700: Story = {
  render: (props) => {
    const { children, fontSize } = props;

    return (
      <>
        <Fonts />
        <p style={{ fontFamily: 'Geist Sans', fontWeight: 700, fontSize }}>{children}</p>
      </>
    );
  },
};

export const GeistMono400: Story = {
  render: (props) => {
    const { children, fontSize } = props;

    return (
      <>
        <Fonts />
        <p style={{ fontFamily: 'Geist Mono', fontWeight: 400, fontSize }}>{children}</p>
      </>
    );
  },
};
