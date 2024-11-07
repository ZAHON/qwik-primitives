import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { component$ } from '@builder.io/qwik';
import { Card } from '@/ui/card';
import tsxCode from '@/ui/card/card-root/card-root.tsx?raw';
import stylesCode from '@/ui/card/card-root/card-root.styles?raw';
import { CodePresentation } from '.';

type Props = {
  type: 'single' | 'tabs';
  heroWithGradient: boolean;
  heroPaddingY: true;
  heroJustify: 'start' | 'center' | 'end';
};
type Story = StoryObj<Props>;

const meta: Meta<Props> = {
  title: 'COMPONENTS/CodePresentation',
  args: {
    type: 'single',
    heroWithGradient: true,
    heroPaddingY: true,
    heroJustify: 'center',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'tabs'],
    },
    heroWithGradient: {
      control: 'boolean',
    },
    heroPaddingY: {
      control: 'boolean',
    },
    heroJustify: {
      control: 'select',
      options: ['start', 'center', 'end'],
    },
  },
};

export default meta;

const CardComponent = component$(() => {
  return (
    <Card.Root style={{ maxWidth: '25rem' }}>
      <Card.Content>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam, quae perferendis exercitationem nulla
          neque provident eos quod dolore quisquam debitis quibusdam accusantium itaque temporibus! Officiis ut neque
          dolorem quasi.
        </Card.Text>
      </Card.Content>
    </Card.Root>
  );
});

export const Preview: Story = {
  render: (props) => {
    const { type, ...others } = props;

    return (
      <>
        {type === 'single' && (
          <CodePresentation component={CardComponent} type="single" code={tsxCode} language="tsx" {...others} />
        )}
        {type === 'tabs' && (
          <CodePresentation
            component={CardComponent}
            type="tabs"
            defaultValue="index.tsx"
            codes={[
              { tab: 'index.tsx', code: tsxCode, language: 'tsx' },
              { tab: 'index.styles.ts', code: stylesCode, language: 'typescript' },
            ]}
          />
        )}
      </>
    );
  },
};

export const TypeSingle: Story = {
  argTypes: {
    type: { control: false },
  },
  render: (props) => {
    return <CodePresentation {...props} component={CardComponent} code={tsxCode} language="tsx" type="single" />;
  },
};

export const TypeTabs: Story = {
  argTypes: {
    type: { control: false },
  },
  render: (props) => {
    return (
      <CodePresentation
        {...props}
        component={CardComponent}
        type="tabs"
        defaultValue="index.tsx"
        codes={[
          { tab: 'index.tsx', code: tsxCode, language: 'tsx' },
          { tab: 'index.styles.ts', code: stylesCode, language: 'typescript' },
        ]}
      />
    );
  },
};
