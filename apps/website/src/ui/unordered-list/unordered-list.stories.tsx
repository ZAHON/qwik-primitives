import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { UnorderedList } from '.';

type Story = StoryObj<PropsOf<typeof UnorderedList.Root>>;

const meta: Meta<PropsOf<typeof UnorderedList.Root>> = {
  title: 'UI/UnorderedList',
  component: UnorderedList.Root,
  args: {
    size: '3',
    highContrast: true,
  },
  argTypes: {
    size: { options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], control: 'select' },
    highContrast: { control: 'boolean' },
  },
};

export default meta;

export const Default: Story = {
  render: (props) => {
    return (
      <UnorderedList.Root {...props}>
        <UnorderedList.Item>Clone or download repository from GitHub</UnorderedList.Item>
        <UnorderedList.Item>Install dependencies with pnpm</UnorderedList.Item>
        <UnorderedList.Item>To start development server run npm dev command</UnorderedList.Item>
      </UnorderedList.Root>
    );
  },
};

export const Size: Story = {
  argTypes: {
    size: { control: false },
  },
  render: (props) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
        <UnorderedList.Root {...props} size="1">
          <UnorderedList.Item>Clone or download repository from GitHub</UnorderedList.Item>
          <UnorderedList.Item>Install dependencies with pnpm</UnorderedList.Item>
          <UnorderedList.Item>To start development server run npm dev command</UnorderedList.Item>
        </UnorderedList.Root>

        <UnorderedList.Root {...props} size="2">
          <UnorderedList.Item>Clone or download repository from GitHub</UnorderedList.Item>
          <UnorderedList.Item>Install dependencies with pnpm</UnorderedList.Item>
          <UnorderedList.Item>To start development server run npm dev command</UnorderedList.Item>
        </UnorderedList.Root>

        <UnorderedList.Root {...props} size="3">
          <UnorderedList.Item>Clone or download repository from GitHub</UnorderedList.Item>
          <UnorderedList.Item>Install dependencies with pnpm</UnorderedList.Item>
          <UnorderedList.Item>To start development server run npm dev command</UnorderedList.Item>
        </UnorderedList.Root>

        <UnorderedList.Root {...props} size="4">
          <UnorderedList.Item>Clone or download repository from GitHub</UnorderedList.Item>
          <UnorderedList.Item>Install dependencies with pnpm</UnorderedList.Item>
          <UnorderedList.Item>To start development server run npm dev command</UnorderedList.Item>
        </UnorderedList.Root>

        <UnorderedList.Root {...props} size="5">
          <UnorderedList.Item>Clone or download repository from GitHub</UnorderedList.Item>
          <UnorderedList.Item>Install dependencies with pnpm</UnorderedList.Item>
          <UnorderedList.Item>To start development server run npm dev command</UnorderedList.Item>
        </UnorderedList.Root>

        <UnorderedList.Root {...props} size="6">
          <UnorderedList.Item>Clone or download repository from GitHub</UnorderedList.Item>
          <UnorderedList.Item>Install dependencies with pnpm</UnorderedList.Item>
          <UnorderedList.Item>To start development server run npm dev command</UnorderedList.Item>
        </UnorderedList.Root>

        <UnorderedList.Root {...props} size="7">
          <UnorderedList.Item>Clone or download repository from GitHub</UnorderedList.Item>
          <UnorderedList.Item>Install dependencies with pnpm</UnorderedList.Item>
          <UnorderedList.Item>To start development server run npm dev command</UnorderedList.Item>
        </UnorderedList.Root>

        <UnorderedList.Root {...props} size="8">
          <UnorderedList.Item>Clone or download repository from GitHub</UnorderedList.Item>
          <UnorderedList.Item>Install dependencies with pnpm</UnorderedList.Item>
          <UnorderedList.Item>To start development server run npm dev command</UnorderedList.Item>
        </UnorderedList.Root>

        <UnorderedList.Root {...props} size="9">
          <UnorderedList.Item>Clone or download repository from GitHub</UnorderedList.Item>
          <UnorderedList.Item>Install dependencies with pnpm</UnorderedList.Item>
          <UnorderedList.Item>To start development server run npm dev command</UnorderedList.Item>
        </UnorderedList.Root>
      </div>
    );
  },
};

export const highContrast: Story = {
  argTypes: {
    highContrast: { control: false },
  },
  render: (props) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
        <UnorderedList.Root {...props} highContrast={false}>
          <UnorderedList.Item>Clone or download repository from GitHub</UnorderedList.Item>
          <UnorderedList.Item>Install dependencies with pnpm</UnorderedList.Item>
          <UnorderedList.Item>To start development server run npm dev command</UnorderedList.Item>
        </UnorderedList.Root>

        <UnorderedList.Root {...props} highContrast={true}>
          <UnorderedList.Item>Clone or download repository from GitHub</UnorderedList.Item>
          <UnorderedList.Item>Install dependencies with pnpm</UnorderedList.Item>
          <UnorderedList.Item>To start development server run npm dev command</UnorderedList.Item>
        </UnorderedList.Root>
      </div>
    );
  },
};

export const ListInside: Story = {
  render: (props) => {
    return (
      <UnorderedList.Root {...props}>
        <UnorderedList.Item>Clone or download repository from GitHub</UnorderedList.Item>
        <UnorderedList.Item>Install dependencies with pnpm</UnorderedList.Item>
        <UnorderedList.Item>
          To start development server run npm dev command
          <UnorderedList.Root {...props}>
            <UnorderedList.Item>Clone or download repository from GitHub</UnorderedList.Item>
            <UnorderedList.Item>Install dependencies with pnpm</UnorderedList.Item>
            <UnorderedList.Item>
              To start development server run npm dev command
              <UnorderedList.Root {...props}>
                <UnorderedList.Item>Clone or download repository from GitHub</UnorderedList.Item>
                <UnorderedList.Item>Install dependencies with pnpm</UnorderedList.Item>
                <UnorderedList.Item>To start development server run npm dev command</UnorderedList.Item>
              </UnorderedList.Root>
            </UnorderedList.Item>
          </UnorderedList.Root>
        </UnorderedList.Item>
      </UnorderedList.Root>
    );
  },
};
