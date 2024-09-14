import type { Meta, StoryObj } from 'storybook-framework-qwik';
import * as Label from '.';

const meta: Meta<typeof Label.Root> = {
  title: 'Components/Label',
};

export default meta;
type Story = StoryObj<typeof Label.Root>;

export const WithWrappingControl: Story = {
  render: () => {
    return (
      <>
        <h2>With wrapping control</h2>
        <Label.Root>
          <button onClick$={() => window.alert('clicked')}>Control</button> Label
        </Label.Root>
      </>
    );
  },
};

export const WithReferencingControl: Story = {
  render: () => {
    return (
      <>
        <h2>With referencing control</h2>
        <button id="control" onClick$={() => window.alert('clicked')}>
          Control
        </button>
        <Label.Root for="control">Label</Label.Root>
      </>
    );
  },
};

export const WithInputNumber: Story = {
  render: () => {
    return (
      <>
        <h2>With input number</h2>
        <Label.Root>
          <span>Name:</span>
          <input type="number" />
        </Label.Root>
      </>
    );
  },
};
