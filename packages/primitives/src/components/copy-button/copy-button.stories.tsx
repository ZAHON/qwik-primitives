import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { component$, useSignal } from '@builder.io/qwik';
import * as CopyButton from '.';

const meta: Meta<typeof CopyButton.Root> = {
  title: 'Components/CopyButton',
};

export default meta;
type Story = StoryObj<typeof CopyButton.Root>;

export const Example: Story = {
  render: () => {
    return (
      <>
        <h2>Example</h2>
        <CopyButton.Root value="https://github.com/ZAHON/qwik-primitives">Copy to clipboard</CopyButton.Root>
      </>
    );
  },
};

export const RandomCopyValue: Story = {
  render: () => {
    const RandomCopyValue = component$(() => {
      const valueToCopy = useSignal('https://github.com/ZAHON/qwik-primitives');

      return (
        <>
          <h2>Random copy value</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', rowGap: '0.75rem' }}>
            <button type="button" onClick$={() => (valueToCopy.value = crypto.randomUUID())}>
              Set random copy value
            </button>
            <CopyButton.Root value={valueToCopy.value}>Copy to clipboard</CopyButton.Root>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', rowGap: '0.5rem' }}>
              <label for="clipboard-contents">Paste clipboard contents here</label>
              <textarea id="clipboard-contents" style={{ height: '16rem', width: '30rem' }} />
            </div>
          </div>
        </>
      );
    });

    return <RandomCopyValue />;
  },
};
