import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { Badge } from '@/ui/badge';
import { Code } from '@/ui/code';
import { DataList } from '.';

type DataListProps = PropsOf<typeof DataList.Root> & Pick<PropsOf<typeof DataList.Label>, 'highContrast'>;
type Story = StoryObj<DataListProps>;

const meta: Meta<DataListProps> = {
  title: 'UI/DataList',
  component: DataList.Root,
  args: {
    size: '2',
    orientation: 'horizontal',
  },
  argTypes: {
    size: { options: ['1', '2', '3'], control: 'select' },
    orientation: { options: ['horizontal', 'vertical'], control: 'select' },
    highContrast: { control: 'boolean', name: 'highContrast (DataList.Label prop)' },
  },
};

export default meta;

export const Default: Story = {
  render: (props) => {
    const { size, highContrast, ...others } = props;

    return (
      <DataList.Root {...others} size={size}>
        <DataList.Item>
          <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
            Status
          </DataList.Label>
          <DataList.Value>
            <Badge.Root size={size}>Authorized</Badge.Root>
          </DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
            ID
          </DataList.Label>
          <DataList.Value>
            <Code.Root size={size} color="default">
              u_2J89JSA4GJ
            </Code.Root>
          </DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
            Name
          </DataList.Label>
          <DataList.Value>Vlad Moroz</DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
            Description
          </DataList.Label>
          <DataList.Value>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque incidunt voluptatibus dolores alias
            deleniti nam eligendi! Porro nesciunt illo consequatur aliquid tenetur consectetur voluptatibus veritatis
            dolore! Doloribus, accusamus dolore.
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
    );
  },
};

export const Orientation: Story = {
  argTypes: {
    orientation: { control: false },
  },
  render: (props) => {
    const { size, highContrast, ...others } = props;

    return (
      <div style={{ display: 'flex', columnGap: '0.75rem' }}>
        <DataList.Root {...others} orientation="horizontal" size={size}>
          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              Status
            </DataList.Label>
            <DataList.Value>
              <Badge.Root size={size}>Authorized</Badge.Root>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              ID
            </DataList.Label>
            <DataList.Value>
              <Code.Root size={size} color="default">
                u_2J89JSA4GJ
              </Code.Root>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              Name
            </DataList.Label>
            <DataList.Value>Vlad Moroz</DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              Description
            </DataList.Label>
            <DataList.Value>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque incidunt voluptatibus dolores alias
              deleniti nam eligendi! Porro nesciunt illo consequatur aliquid tenetur consectetur voluptatibus veritatis
              dolore! Doloribus, accusamus dolore.
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>

        <DataList.Root {...others} orientation="vertical" size={size}>
          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              Status
            </DataList.Label>
            <DataList.Value>
              <Badge.Root size={size}>Authorized</Badge.Root>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              ID
            </DataList.Label>
            <DataList.Value>
              <Code.Root size={size} color="default">
                u_2J89JSA4GJ
              </Code.Root>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              Name
            </DataList.Label>
            <DataList.Value>Vlad Moroz</DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              Description
            </DataList.Label>
            <DataList.Value>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque incidunt voluptatibus dolores alias
              deleniti nam eligendi! Porro nesciunt illo consequatur aliquid tenetur consectetur voluptatibus veritatis
              dolore! Doloribus, accusamus dolore.
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </div>
    );
  },
};

export const Size: Story = {
  argTypes: {
    size: { control: false },
  },
  render: (props) => {
    const { highContrast, ...others } = props;

    return (
      <div style={{ display: 'flex', columnGap: '0.75rem' }}>
        <DataList.Root {...others} size="1">
          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              Status
            </DataList.Label>
            <DataList.Value>
              <Badge.Root size="1">Authorized</Badge.Root>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              ID
            </DataList.Label>
            <DataList.Value>
              <Code.Root size="1" color="default">
                u_2J89JSA4GJ
              </Code.Root>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              Name
            </DataList.Label>
            <DataList.Value>Vlad Moroz</DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              Description
            </DataList.Label>
            <DataList.Value>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque incidunt voluptatibus dolores alias
              deleniti nam eligendi! Porro nesciunt illo consequatur aliquid tenetur consectetur voluptatibus veritatis
              dolore! Doloribus, accusamus dolore.
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>

        <DataList.Root {...others} size="2">
          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              Status
            </DataList.Label>
            <DataList.Value>
              <Badge.Root size="2">Authorized</Badge.Root>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              ID
            </DataList.Label>
            <DataList.Value>
              <Code.Root size="2" color="default">
                u_2J89JSA4GJ
              </Code.Root>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              Name
            </DataList.Label>
            <DataList.Value>Vlad Moroz</DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              Description
            </DataList.Label>
            <DataList.Value>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque incidunt voluptatibus dolores alias
              deleniti nam eligendi! Porro nesciunt illo consequatur aliquid tenetur consectetur voluptatibus veritatis
              dolore! Doloribus, accusamus dolore.
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>

        <DataList.Root {...others} size="3">
          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              Status
            </DataList.Label>
            <DataList.Value>
              <Badge.Root size="3">Authorized</Badge.Root>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              ID
            </DataList.Label>
            <DataList.Value>
              <Code.Root size="3" color="default">
                u_2J89JSA4GJ
              </Code.Root>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              Name
            </DataList.Label>
            <DataList.Value>Vlad Moroz</DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={highContrast} style={{ minWidth: '4.5rem' }}>
              Description
            </DataList.Label>
            <DataList.Value>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque incidunt voluptatibus dolores alias
              deleniti nam eligendi! Porro nesciunt illo consequatur aliquid tenetur consectetur voluptatibus veritatis
              dolore! Doloribus, accusamus dolore.
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </div>
    );
  },
};

export const HighContrast: Story = {
  argTypes: {
    highContrast: { control: false },
  },
  render: (props) => {
    const { size, ...others } = props;

    return (
      <div style={{ display: 'flex', columnGap: '0.75rem' }}>
        <DataList.Root {...others} size={size}>
          <DataList.Item>
            <DataList.Label highContrast={false} style={{ minWidth: '4.5rem' }}>
              Status
            </DataList.Label>
            <DataList.Value>
              <Badge.Root size={size}>Authorized</Badge.Root>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={false} style={{ minWidth: '4.5rem' }}>
              ID
            </DataList.Label>
            <DataList.Value>
              <Code.Root size={size} color="default">
                u_2J89JSA4GJ
              </Code.Root>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={false} style={{ minWidth: '4.5rem' }}>
              Name
            </DataList.Label>
            <DataList.Value>Vlad Moroz</DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={false} style={{ minWidth: '4.5rem' }}>
              Description
            </DataList.Label>
            <DataList.Value>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque incidunt voluptatibus dolores alias
              deleniti nam eligendi! Porro nesciunt illo consequatur aliquid tenetur consectetur voluptatibus veritatis
              dolore! Doloribus, accusamus dolore.
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>

        <DataList.Root {...others} size={size}>
          <DataList.Item>
            <DataList.Label highContrast={true} style={{ minWidth: '4.5rem' }}>
              Status
            </DataList.Label>
            <DataList.Value>
              <Badge.Root size={size}>Authorized</Badge.Root>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={true} style={{ minWidth: '4.5rem' }}>
              ID
            </DataList.Label>
            <DataList.Value>
              <Code.Root size={size} color="default">
                u_2J89JSA4GJ
              </Code.Root>
            </DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={true} style={{ minWidth: '4.5rem' }}>
              Name
            </DataList.Label>
            <DataList.Value>Vlad Moroz</DataList.Value>
          </DataList.Item>

          <DataList.Item>
            <DataList.Label highContrast={true} style={{ minWidth: '4.5rem' }}>
              Description
            </DataList.Label>
            <DataList.Value>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque incidunt voluptatibus dolores alias
              deleniti nam eligendi! Porro nesciunt illo consequatur aliquid tenetur consectetur voluptatibus veritatis
              dolore! Doloribus, accusamus dolore.
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </div>
    );
  },
};
