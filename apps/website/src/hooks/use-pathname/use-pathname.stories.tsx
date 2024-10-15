import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { component$ } from '@builder.io/qwik';
import { QwikCityMockProvider } from '@builder.io/qwik-city';
import { Text } from '@/ui/text';
import { Code } from '@/ui/code';
import { usePathname } from '.';

type TestProps = { url: string };
type Story = StoryObj<TestProps>;

const meta: Meta<TestProps> = {
  title: 'HOOKS/usePathname',
  args: {
    url: 'http://localhost:5173',
  },
  argTypes: {
    url: {
      options: [
        'http://localhost:5173',
        'http://localhost:5173/',
        'http://localhost:5173/test1',
        'http://localhost:5173/test1/',
        'http://localhost:5173/test1/test2',
        'http://localhost:5173/test1/test2/',
      ],
      control: 'select',
    },
  },
};

export default meta;

export const Example: Story = {
  render: (props) => {
    const { url } = props;

    const Example = component$(() => {
      const pathname = usePathname();

      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', rowGap: '0.75rem' }}>
          <Text.Root>
            Current pathname: <Code.Root>{pathname}</Code.Root>
          </Text.Root>
          <Text.Root>
            Current url: <Code.Root>{url}</Code.Root>
          </Text.Root>
        </div>
      );
    });

    const ExampleWithQwikCityMockProvider = component$(() => {
      return (
        <QwikCityMockProvider url={url}>
          {/* eslint-disable-next-line qwik/valid-lexical-scope */}
          <Example /> //
        </QwikCityMockProvider>
      );
    });

    return <ExampleWithQwikCityMockProvider />;
  },
};
