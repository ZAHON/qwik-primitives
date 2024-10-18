import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { Text } from '@/ui/text';
import { Card } from '.';

type CardRootSize = PropsOf<typeof Card.Root>['size'];
type CardProps = PropsOf<typeof Card.Root>;
type Story = StoryObj<CardProps>;

const meta: Meta<CardProps> = {
  title: 'UI/Card',
  component: Card.Root,
  args: {
    size: '1',
  },
  argTypes: {
    size: { options: ['1', '2', '3', '4', '5'], control: 'select' },
  },
};

export default meta;

export const Default: Story = {
  render: (props) => {
    const { size, ...others } = props;

    const getBoxWidth = (size: CardRootSize) => {
      switch (size) {
        case '1': {
          return '400px';
        }
        case '2': {
          return '450px';
        }
        case '3': {
          return '500px';
        }
        case '4': {
          return '550px';
        }
        case '5': {
          return '600px';
        }
        default: {
          throw Error(`Unknown size: ${size}`);
        }
      }
    };

    const getTextSize = (size: CardRootSize) => {
      switch (size) {
        case '1': {
          return '2';
        }
        case '2': {
          return '3';
        }
        case '3': {
          return '4';
        }
        case '4': {
          return '5';
        }
        case '5': {
          return '6';
        }
        default: {
          throw Error(`Unknown size: ${size}`);
        }
      }
    };

    return (
      <div style={{ width: getBoxWidth(size) }}>
        <Card.Root {...others} size={size}>
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.5rem' }}>
            <Text.Root size={getTextSize(size)} style={{ fontWeight: 700 }}>
              Card title
            </Text.Root>
            <Text.Root size={getTextSize(size)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam, quae perferendis exercitationem nulla
              neque provident eos quod dolore quisquam debitis quibusdam accusantium itaque temporibus! Officiis ut
              neque dolorem quasi.
            </Text.Root>
          </div>
        </Card.Root>
      </div>
    );
  },
};

export const Size: Story = {
  argTypes: {
    size: { control: false },
  },
  render: (props) => {
    const { ...others } = props;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
        <div style={{ width: '400px' }}>
          <Card.Root {...others} size="1">
            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.5rem' }}>
              <Text.Root size="2" style={{ fontWeight: 700 }}>
                Card title
              </Text.Root>
              <Text.Root size="2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam, quae perferendis exercitationem
                nulla neque provident eos quod dolore quisquam debitis quibusdam accusantium itaque temporibus! Officiis
                ut neque dolorem quasi.
              </Text.Root>
            </div>
          </Card.Root>
        </div>

        <div style={{ width: '450px' }}>
          <Card.Root {...others} size="2">
            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.5rem' }}>
              <Text.Root size="3" style={{ fontWeight: 700 }}>
                Card title
              </Text.Root>
              <Text.Root size="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam, quae perferendis exercitationem
                nulla neque provident eos quod dolore quisquam debitis quibusdam accusantium itaque temporibus! Officiis
                ut neque dolorem quasi.
              </Text.Root>
            </div>
          </Card.Root>
        </div>

        <div style={{ width: '500px' }}>
          <Card.Root {...others} size="3">
            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.5rem' }}>
              <Text.Root size="4" style={{ fontWeight: 700 }}>
                Card title
              </Text.Root>
              <Text.Root size="4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam, quae perferendis exercitationem
                nulla neque provident eos quod dolore quisquam debitis quibusdam accusantium itaque temporibus! Officiis
                ut neque dolorem quasi.
              </Text.Root>
            </div>
          </Card.Root>
        </div>

        <div style={{ width: '550px' }}>
          <Card.Root {...others} size="4">
            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.5rem' }}>
              <Text.Root size="5" style={{ fontWeight: 700 }}>
                Card title
              </Text.Root>
              <Text.Root size="5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam, quae perferendis exercitationem
                nulla neque provident eos quod dolore quisquam debitis quibusdam accusantium itaque temporibus! Officiis
                ut neque dolorem quasi.
              </Text.Root>
            </div>
          </Card.Root>
        </div>

        <div style={{ width: '600px' }}>
          <Card.Root {...others} size="5">
            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.5rem' }}>
              <Text.Root size="6" style={{ fontWeight: 700 }}>
                Card title
              </Text.Root>
              <Text.Root size="6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam, quae perferendis exercitationem
                nulla neque provident eos quod dolore quisquam debitis quibusdam accusantium itaque temporibus! Officiis
                ut neque dolorem quasi.
              </Text.Root>
            </div>
          </Card.Root>
        </div>
      </div>
    );
  },
};
