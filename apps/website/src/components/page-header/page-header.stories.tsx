import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { QwikCityMockProvider } from '@builder.io/qwik-city';
import { PageHeader } from '.';

type StoryProps = { url: string };
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: 'COMPONENTS/PageHeader',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    url: 'http://localhost:5173',
  },
  argTypes: {
    url: {
      options: ['http://localhost:5173', 'http://localhost:5173/docs'],
      control: 'select',
    },
  },
};

export default meta;

export const Preview: Story = {
  render: (props) => {
    const { url } = props;

    return (
      <QwikCityMockProvider url={url}>
        <PageHeader />
        <div style={{ height: '200vh' }} />
      </QwikCityMockProvider>
    );
  },
};
