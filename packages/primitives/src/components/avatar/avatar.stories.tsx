import type { Meta, StoryObj } from 'storybook-framework-qwik';
import * as Avatar from '.';

const AVATAR_IMAGE_SRC = 'https://picsum.photos/id/1005/400/400';
const AVATAR_IMAGE_SRC_BROKEN = 'https://broken.link.com/broken-pic.jpg';

const meta: Meta<typeof Avatar.Root> = {
  title: 'Components/Avatar',
};

export default meta;
type Story = StoryObj<typeof Avatar.Root>;

export const WithoutImageAndWithFallback: Story = {
  render: () => {
    return (
      <>
        <h2>Without image & with fallback</h2>
        <Avatar.Root>
          <Avatar.Fallback>JS</Avatar.Fallback>
        </Avatar.Root>
      </>
    );
  },
};

export const WithImageAndWithFallback: Story = {
  render: () => {
    return (
      <>
        <h2>With image & with fallback</h2>
        <Avatar.Root>
          <Avatar.Image
            alt="John Smith"
            src={AVATAR_IMAGE_SRC}
            onLoadingStatusChange$={(status) => `[qwik-primitives] Avatar.Image loading status: ${status}`}
          />
          <Avatar.Fallback delayMs={300}>JS</Avatar.Fallback>
        </Avatar.Root>
      </>
    );
  },
};

export const WithImageAndWithFallbackButBrokenSrc: Story = {
  render: () => {
    return (
      <>
        <h2>With image & with fallback (but broken src)</h2>
        <Avatar.Root>
          <Avatar.Image
            alt="John Smith"
            src={AVATAR_IMAGE_SRC_BROKEN}
            onLoadingStatusChange$={(status) => `[qwik-primitives] Avatar.Image loading status: ${status}`}
          />
          <Avatar.Fallback>JS</Avatar.Fallback>
        </Avatar.Root>
      </>
    );
  },
};
