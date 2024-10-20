import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { Card } from '.';

type CardRootSize = PropsOf<typeof Card.Root>['size'];
type CardProps = PropsOf<typeof Card.Root>;
type Story = StoryObj<CardProps>;

const meta: Meta<CardProps> = {
  title: 'UI/Card',
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

    return (
      <div style={{ width: getBoxWidth(size) }}>
        <Card.Root {...others} size={size}>
          <Card.Content>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam, quae perferendis exercitationem nulla
              neque provident eos quod dolore quisquam debitis quibusdam accusantium itaque temporibus! Officiis ut
              neque dolorem quasi.
            </Card.Text>
          </Card.Content>
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
            <Card.Content>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam, quae perferendis exercitationem
                nulla neque provident eos quod dolore quisquam debitis quibusdam accusantium itaque temporibus! Officiis
                ut neque dolorem quasi.
              </Card.Text>
            </Card.Content>
          </Card.Root>
        </div>

        <div style={{ width: '450px' }}>
          <Card.Root {...others} size="2">
            <Card.Content>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam, quae perferendis exercitationem
                nulla neque provident eos quod dolore quisquam debitis quibusdam accusantium itaque temporibus! Officiis
                ut neque dolorem quasi.
              </Card.Text>
            </Card.Content>
          </Card.Root>
        </div>

        <div style={{ width: '500px' }}>
          <Card.Root {...others} size="3">
            <Card.Content>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam, quae perferendis exercitationem
                nulla neque provident eos quod dolore quisquam debitis quibusdam accusantium itaque temporibus! Officiis
                ut neque dolorem quasi.
              </Card.Text>
            </Card.Content>
          </Card.Root>
        </div>

        <div style={{ width: '550px' }}>
          <Card.Root {...others} size="4">
            <Card.Content>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam, quae perferendis exercitationem
                nulla neque provident eos quod dolore quisquam debitis quibusdam accusantium itaque temporibus! Officiis
                ut neque dolorem quasi.
              </Card.Text>
            </Card.Content>
          </Card.Root>
        </div>

        <div style={{ width: '600px' }}>
          <Card.Root {...others} size="5">
            <Card.Content>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam, quae perferendis exercitationem
                nulla neque provident eos quod dolore quisquam debitis quibusdam accusantium itaque temporibus! Officiis
                ut neque dolorem quasi.
              </Card.Text>
            </Card.Content>
          </Card.Root>
        </div>
      </div>
    );
  },
};
