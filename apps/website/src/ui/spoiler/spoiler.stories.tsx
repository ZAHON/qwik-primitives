import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { Card } from '@/ui/card';
import { Spoiler } from '.';

type SpoilerProps = PropsOf<typeof Spoiler.Root>;
type Story = StoryObj<SpoilerProps>;

const meta: Meta<SpoilerProps> = {
  title: 'UI/Spoiler',
  args: {
    defaultOpen: undefined,
    disabled: undefined,
  },
  argTypes: {
    defaultOpen: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default: Story = {
  render: (props) => {
    return (
      <div style={{ width: '28.125rem' }}>
        <Spoiler.Root {...props}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', rowGap: '0.75rem' }}>
            <Spoiler.Trigger>Toggle</Spoiler.Trigger>
            <Spoiler.Panel minHeight="60px">
              <Spoiler.Content>
                <Card.Root>
                  <Card.Content>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, eius? Rerum eligendi, alias
                      sapiente pariatur dolorum sunt nobis accusantium officia voluptates ad accusamus ab veritatis
                      deleniti soluta vel corporis neque, quibusdam eos consequuntur amet architecto ex porro! Quod,
                      eius? Necessitatibus non nobis quidem aliquid perspiciatis excepturi inventore doloribus totam
                      eveniet unde soluta aperiam, assumenda nihil fuga harum veniam placeat, praesentium nisi saepe
                      dicta dolore distinctio? Omnis amet dignissimos quo repellat magnam a iure repudiandae facere
                      architecto quibusdam. Ad dolores esse officiis suscipit recusandae alias neque tenetur nulla magni
                      non. Odit, aliquam. Sequi quasi error non quos quae, ullam minus quis.
                    </Card.Text>
                  </Card.Content>
                </Card.Root>
              </Spoiler.Content>
            </Spoiler.Panel>
          </div>
        </Spoiler.Root>
      </div>
    );
  },
};

export const DefaultOpen: Story = {
  argTypes: {
    defaultOpen: { control: false },
  },
  render: (props) => {
    return (
      <div style={{ width: '28.125rem' }}>
        <Spoiler.Root {...props} defaultOpen={true}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', rowGap: '0.75rem' }}>
            <Spoiler.Trigger>Toggle</Spoiler.Trigger>
            <Spoiler.Panel minHeight="60px">
              <Spoiler.Content>
                <Card.Root>
                  <Card.Content>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, eius? Rerum eligendi, alias
                      sapiente pariatur dolorum sunt nobis accusantium officia voluptates ad accusamus ab veritatis
                      deleniti soluta vel corporis neque, quibusdam eos consequuntur amet architecto ex porro! Quod,
                      eius? Necessitatibus non nobis quidem aliquid perspiciatis excepturi inventore doloribus totam
                      eveniet unde soluta aperiam, assumenda nihil fuga harum veniam placeat, praesentium nisi saepe
                      dicta dolore distinctio? Omnis amet dignissimos quo repellat magnam a iure repudiandae facere
                      architecto quibusdam. Ad dolores esse officiis suscipit recusandae alias neque tenetur nulla magni
                      non. Odit, aliquam. Sequi quasi error non quos quae, ullam minus quis.
                    </Card.Text>
                  </Card.Content>
                </Card.Root>
              </Spoiler.Content>
            </Spoiler.Panel>
          </div>
        </Spoiler.Root>
      </div>
    );
  },
};

export const Disabled: Story = {
  argTypes: {
    disabled: { control: false },
  },
  render: (props) => {
    return (
      <div style={{ width: '28.125rem' }}>
        <Spoiler.Root {...props} disabled={true}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', rowGap: '0.75rem' }}>
            <Spoiler.Trigger>Toggle</Spoiler.Trigger>
            <Spoiler.Panel minHeight="60px">
              <Spoiler.Content>
                <Card.Root>
                  <Card.Content>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, eius? Rerum eligendi, alias
                      sapiente pariatur dolorum sunt nobis accusantium officia voluptates ad accusamus ab veritatis
                      deleniti soluta vel corporis neque, quibusdam eos consequuntur amet architecto ex porro! Quod,
                      eius? Necessitatibus non nobis quidem aliquid perspiciatis excepturi inventore doloribus totam
                      eveniet unde soluta aperiam, assumenda nihil fuga harum veniam placeat, praesentium nisi saepe
                      dicta dolore distinctio? Omnis amet dignissimos quo repellat magnam a iure repudiandae facere
                      architecto quibusdam. Ad dolores esse officiis suscipit recusandae alias neque tenetur nulla magni
                      non. Odit, aliquam. Sequi quasi error non quos quae, ullam minus quis.
                    </Card.Text>
                  </Card.Content>
                </Card.Root>
              </Spoiler.Content>
            </Spoiler.Panel>
          </div>
        </Spoiler.Root>
      </div>
    );
  },
};
