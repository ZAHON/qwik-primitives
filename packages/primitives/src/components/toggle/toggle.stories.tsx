import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { component$, useStyles$, useSignal } from '@builder.io/qwik';
import * as Toggle from '.';

type ToggleProps = PropsOf<typeof Toggle.Root> & { children: string };
type Story = StoryObj<ToggleProps>;

const meta: Meta<ToggleProps> = {
  title: 'Components/Toggle',
  args: {
    children: 'Toggle',
    disabled: undefined,
  },
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default: Story = {
  render: (props) => {
    const { children, ...others } = props;

    const Default = component$(() => {
      useStyles$(`
				[data-scope='toggle'][data-part='root'][data-state='off']::after {
					content: '(off)';
				}
				
				[data-scope='toggle'][data-part='root'][data-state='on']::after {
					content: '(on)';
				}
			`);

      // eslint-disable-next-line qwik/valid-lexical-scope
      return <Toggle.Root {...others}>{children}</Toggle.Root>;
    });

    return <Default />;
  },
};

export const UncontrolledOffByDefault: Story = {
  render: (props) => {
    const { children, ...others } = props;

    const UncontrolledOffByDefault = component$(() => {
      useStyles$(`
				[data-scope='toggle'][data-part='root'][data-state='off']::after {
					content: '(off)';
				}
				
				[data-scope='toggle'][data-part='root'][data-state='on']::after {
					content: '(on)';
				}
			`);

      return (
        // eslint-disable-next-line qwik/valid-lexical-scope
        <Toggle.Root {...others} defaultPressed={false}>
          {children}
        </Toggle.Root>
      );
    });

    return <UncontrolledOffByDefault />;
  },
};

export const UncontrolledOnByDefault: Story = {
  render: (props) => {
    const { children, ...others } = props;

    const UncontrolledOnByDefault = component$(() => {
      useStyles$(`
				[data-scope='toggle'][data-part='root'][data-state='off']::after {
					content: '(off)';
				}
				
				[data-scope='toggle'][data-part='root'][data-state='on']::after {
					content: '(on)';
				}
			`);

      return (
        // eslint-disable-next-line qwik/valid-lexical-scope
        <Toggle.Root {...others} defaultPressed={true}>
          {children}
        </Toggle.Root>
      );
    });

    return <UncontrolledOnByDefault />;
  },
};

export const ControlledOffByDefault: Story = {
  render: (props) => {
    const { children, ...others } = props;

    const ControlledOffByDefault = component$(() => {
      const isPressed = useSignal(false);

      useStyles$(`
				[data-scope='toggle'][data-part='root'][data-state='off']::after {
					content: '(off)';
				}
				
				[data-scope='toggle'][data-part='root'][data-state='on']::after {
					content: '(on)';
				}
			`);

      return (
        // eslint-disable-next-line qwik/valid-lexical-scope
        <Toggle.Root {...others} pressed={isPressed} onPressedChange$={(pressed) => (isPressed.value = pressed)}>
          {children}
        </Toggle.Root>
      );
    });

    return <ControlledOffByDefault />;
  },
};

export const ControlledOnByDefault: Story = {
  render: (props) => {
    const { children, ...others } = props;

    const ControlledOnByDefault = component$(() => {
      const isPressed = useSignal(true);

      useStyles$(`
				[data-scope='toggle'][data-part='root'][data-state='off']::after {
					content: '(off)';
				}
				
				[data-scope='toggle'][data-part='root'][data-state='on']::after {
					content: '(on)';
				}
			`);

      return (
        // eslint-disable-next-line qwik/valid-lexical-scope
        <Toggle.Root {...others} pressed={isPressed} onPressedChange$={(pressed) => (isPressed.value = pressed)}>
          {children}
        </Toggle.Root>
      );
    });

    return <ControlledOnByDefault />;
  },
};

export const Disabled: Story = {
  argTypes: {
    disabled: { control: false },
  },
  render: (props) => {
    const { children, ...others } = props;

    return (
      <Toggle.Root {...others} disabled={true}>
        {children}
      </Toggle.Root>
    );
  },
};
