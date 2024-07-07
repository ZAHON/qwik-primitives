import type { Meta, StoryObj } from 'storybook-framework-qwik';
import * as Alert from '.';

const meta: Meta<typeof Alert.Root> = {
  title: 'Components/Alert',
};

export default meta;
type Story = StoryObj<typeof Alert.Root>;

export const Example: Story = {
  render: () => {
    return (
      <>
        <h2>Example</h2>
        <Alert.Root>Access denied. Please contact the network administrator to view this page.</Alert.Root>
      </>
    );
  },
};
