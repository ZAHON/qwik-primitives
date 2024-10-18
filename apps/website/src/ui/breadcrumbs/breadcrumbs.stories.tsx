import type { Meta, StoryObj } from 'storybook-framework-qwik';
import type { PropsOf } from '@builder.io/qwik';
import { Breadcrumbs } from '.';

type BreadcrumbsProps = PropsOf<typeof Breadcrumbs.Root>;
type Story = StoryObj<BreadcrumbsProps>;

const meta: Meta<BreadcrumbsProps> = {
  title: 'UI/Breadcrumbs',
  args: {
    size: '2',
    color: 'default',
  },
  argTypes: {
    size: { options: ['1', '2', '3'], control: 'select' },
    color: { options: ['default', 'primary'], control: 'select' },
  },
};

export default meta;

export const Default: Story = {
  render: (props) => {
    return (
      <Breadcrumbs.Root {...props}>
        <Breadcrumbs.List>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
            <Breadcrumbs.Separator>
              <Breadcrumbs.SeparatorIcon />
            </Breadcrumbs.Separator>
          </Breadcrumbs.Item>

          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="#">Docs</Breadcrumbs.Link>
            <Breadcrumbs.Separator>
              <Breadcrumbs.SeparatorIcon />
            </Breadcrumbs.Separator>
          </Breadcrumbs.Item>

          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="#">Components</Breadcrumbs.Link>
            <Breadcrumbs.Separator>
              <Breadcrumbs.SeparatorIcon />
            </Breadcrumbs.Separator>
          </Breadcrumbs.Item>

          <Breadcrumbs.Item>
            <Breadcrumbs.Page>Breadcrumbs</Breadcrumbs.Page>
          </Breadcrumbs.Item>
        </Breadcrumbs.List>
      </Breadcrumbs.Root>
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
        <Breadcrumbs.Root {...props} size="1">
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
              <Breadcrumbs.Separator>
                <Breadcrumbs.SeparatorIcon />
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>

            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Docs</Breadcrumbs.Link>
              <Breadcrumbs.Separator>
                <Breadcrumbs.SeparatorIcon />
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>

            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Components</Breadcrumbs.Link>
              <Breadcrumbs.Separator>
                <Breadcrumbs.SeparatorIcon />
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>

            <Breadcrumbs.Item>
              <Breadcrumbs.Page>Breadcrumbs</Breadcrumbs.Page>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>

        <Breadcrumbs.Root {...props} size="2">
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
              <Breadcrumbs.Separator>
                <Breadcrumbs.SeparatorIcon />
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>

            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Docs</Breadcrumbs.Link>
              <Breadcrumbs.Separator>
                <Breadcrumbs.SeparatorIcon />
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>

            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Components</Breadcrumbs.Link>
              <Breadcrumbs.Separator>
                <Breadcrumbs.SeparatorIcon />
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>

            <Breadcrumbs.Item>
              <Breadcrumbs.Page>Breadcrumbs</Breadcrumbs.Page>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>

        <Breadcrumbs.Root {...props} size="3">
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
              <Breadcrumbs.Separator>
                <Breadcrumbs.SeparatorIcon />
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>

            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Docs</Breadcrumbs.Link>
              <Breadcrumbs.Separator>
                <Breadcrumbs.SeparatorIcon />
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>

            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Components</Breadcrumbs.Link>
              <Breadcrumbs.Separator>
                <Breadcrumbs.SeparatorIcon />
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>

            <Breadcrumbs.Item>
              <Breadcrumbs.Page>Breadcrumbs</Breadcrumbs.Page>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      </div>
    );
  },
};

export const Color: Story = {
  argTypes: {
    color: { control: false },
  },
  render: (props) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '0.75rem' }}>
        <Breadcrumbs.Root {...props} color="default">
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
              <Breadcrumbs.Separator>
                <Breadcrumbs.SeparatorIcon />
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>

            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Docs</Breadcrumbs.Link>
              <Breadcrumbs.Separator>
                <Breadcrumbs.SeparatorIcon />
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>

            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Components</Breadcrumbs.Link>
              <Breadcrumbs.Separator>
                <Breadcrumbs.SeparatorIcon />
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>

            <Breadcrumbs.Item>
              <Breadcrumbs.Page>Breadcrumbs</Breadcrumbs.Page>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>

        <Breadcrumbs.Root {...props} color="primary">
          <Breadcrumbs.List>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
              <Breadcrumbs.Separator>
                <Breadcrumbs.SeparatorIcon />
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>

            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Docs</Breadcrumbs.Link>
              <Breadcrumbs.Separator>
                <Breadcrumbs.SeparatorIcon />
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>

            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Components</Breadcrumbs.Link>
              <Breadcrumbs.Separator>
                <Breadcrumbs.SeparatorIcon />
              </Breadcrumbs.Separator>
            </Breadcrumbs.Item>

            <Breadcrumbs.Item>
              <Breadcrumbs.Page>Breadcrumbs</Breadcrumbs.Page>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      </div>
    );
  },
};
