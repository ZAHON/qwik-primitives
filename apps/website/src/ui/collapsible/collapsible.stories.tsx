import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { Card } from '@/ui/card';
import { Text } from '@/ui/text';
import { Collapsible } from '.';

type CollapsibleProps = PropsOf<typeof Collapsible.Root>;
type Story = StoryObj<CollapsibleProps>;

const meta: Meta<CollapsibleProps> = {
  title: 'UI/Collapsible',
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
        <Collapsible.Root {...props}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', rowGap: '0.75rem' }}>
            <Collapsible.Trigger>Toggle</Collapsible.Trigger>
            <Collapsible.Panel>
              <Collapsible.Content>
                <Card.Root>
                  <Text.Root size="2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dicta. Inventore, quae. Quasi
                    voluptatem, provident, velit quos optio soluta maiores debitis porro, placeat quidem qui
                    accusantium. Numquam recusandae quidem illum, expedita architecto repellendus eaque amet
                    repudiandae! Accusantium maiores et expedita itaque, placeat corrupti, necessitatibus corporis saepe
                    quidem numquam at, fugiat praesentium veniam odit libero ipsum dignissimos blanditiis temporibus
                    obcaecati accusamus. Neque, aspernatur laborum exercitationem esse minima vero molestias earum
                    saepe, numquam quasi distinctio unde soluta dolores ipsa perspiciatis nesciunt possimus consequatur
                    voluptatibus id quidem temporibus ut recusandae illo? Illo vitae facilis, a exercitationem quidem
                    vel assumenda optio corrupti quisquam. Omnis.
                  </Text.Root>
                </Card.Root>
              </Collapsible.Content>
            </Collapsible.Panel>
          </div>
        </Collapsible.Root>
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
        <Collapsible.Root {...props} defaultOpen={true}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', rowGap: '0.75rem' }}>
            <Collapsible.Trigger>Toggle</Collapsible.Trigger>
            <Collapsible.Panel>
              <Collapsible.Content>
                <Card.Root>
                  <Text.Root size="2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dicta. Inventore, quae. Quasi
                    voluptatem, provident, velit quos optio soluta maiores debitis porro, placeat quidem qui
                    accusantium. Numquam recusandae quidem illum, expedita architecto repellendus eaque amet
                    repudiandae! Accusantium maiores et expedita itaque, placeat corrupti, necessitatibus corporis saepe
                    quidem numquam at, fugiat praesentium veniam odit libero ipsum dignissimos blanditiis temporibus
                    obcaecati accusamus. Neque, aspernatur laborum exercitationem esse minima vero molestias earum
                    saepe, numquam quasi distinctio unde soluta dolores ipsa perspiciatis nesciunt possimus consequatur
                    voluptatibus id quidem temporibus ut recusandae illo? Illo vitae facilis, a exercitationem quidem
                    vel assumenda optio corrupti quisquam. Omnis.
                  </Text.Root>
                </Card.Root>
              </Collapsible.Content>
            </Collapsible.Panel>
          </div>
        </Collapsible.Root>
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
        <Collapsible.Root {...props} disabled={true}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', rowGap: '0.75rem' }}>
            <Collapsible.Trigger>Toggle</Collapsible.Trigger>
            <Collapsible.Panel>
              <Collapsible.Content>
                <Card.Root>
                  <Text.Root size="2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dicta. Inventore, quae. Quasi
                    voluptatem, provident, velit quos optio soluta maiores debitis porro, placeat quidem qui
                    accusantium. Numquam recusandae quidem illum, expedita architecto repellendus eaque amet
                    repudiandae! Accusantium maiores et expedita itaque, placeat corrupti, necessitatibus corporis saepe
                    quidem numquam at, fugiat praesentium veniam odit libero ipsum dignissimos blanditiis temporibus
                    obcaecati accusamus. Neque, aspernatur laborum exercitationem esse minima vero molestias earum
                    saepe, numquam quasi distinctio unde soluta dolores ipsa perspiciatis nesciunt possimus consequatur
                    voluptatibus id quidem temporibus ut recusandae illo? Illo vitae facilis, a exercitationem quidem
                    vel assumenda optio corrupti quisquam. Omnis.
                  </Text.Root>
                </Card.Root>
              </Collapsible.Content>
            </Collapsible.Panel>
          </div>
        </Collapsible.Root>
      </div>
    );
  },
};
