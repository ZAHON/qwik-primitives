import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { component$, useSignal } from '@builder.io/qwik';
import * as Toggle from '.';

const ItalicIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.67494 3.50017C5.67494 3.25164 5.87641 3.05017 6.12494 3.05017H10.6249C10.8735 3.05017 11.0749 3.25164 11.0749 3.50017C11.0749 3.7487 10.8735 3.95017 10.6249 3.95017H9.00587L7.2309 11.05H8.87493C9.12345 11.05 9.32493 11.2515 9.32493 11.5C9.32493 11.7486 9.12345 11.95 8.87493 11.95H4.37493C4.1264 11.95 3.92493 11.7486 3.92493 11.5C3.92493 11.2515 4.1264 11.05 4.37493 11.05H5.99397L7.76894 3.95017H6.12494C5.87641 3.95017 5.67494 3.7487 5.67494 3.50017Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

const meta: Meta<typeof Toggle.Root> = {
  title: 'Components/Toggle',
};

export default meta;
type Story = StoryObj<typeof Toggle.Root>;

export const Disabled: Story = {
  render: () => {
    return (
      <>
        <h2>Disabled</h2>
        <Toggle.Root disabled={true} aria-label="Toggle italic">
          <ItalicIcon />
        </Toggle.Root>
      </>
    );
  },
};

export const Uncontrolled: Story = {
  render: () => {
    return (
      <>
        <h2>Uncontrolled off by default</h2>
        <Toggle.Root defaultPressed={false} aria-label="Toggle italic">
          <ItalicIcon />
        </Toggle.Root>

        <h2>Uncontrolled on by default</h2>
        <Toggle.Root defaultPressed={true} aria-label="Toggle italic">
          <ItalicIcon />
        </Toggle.Root>
      </>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const ControlledOffByDefault = component$(() => {
      const isPressed = useSignal(false);

      return (
        <>
          <h2>Controlled off by default</h2>
          <Toggle.Root
            pressed={isPressed}
            onPressedChange$={(pressed) => (isPressed.value = pressed)}
            aria-label="Toggle italic"
          >
            <ItalicIcon />
          </Toggle.Root>
        </>
      );
    });

    const ControlledOnByDefault = component$(() => {
      const isPressed = useSignal(true);

      return (
        <>
          <h2>Controlled on by default</h2>
          <Toggle.Root
            pressed={isPressed}
            onPressedChange$={(pressed) => (isPressed.value = pressed)}
            aria-label="Toggle italic"
          >
            <ItalicIcon />
          </Toggle.Root>
        </>
      );
    });

    return (
      <>
        <ControlledOffByDefault />
        <ControlledOnByDefault />
      </>
    );
  },
};
