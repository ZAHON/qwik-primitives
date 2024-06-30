import type { Meta, StoryObj } from 'storybook-framework-qwik';
import * as Breadcrumbs from '.';

const BASE_URL = 'https://github.com/ZAHON/qwik-primitives/tree/main/packages/primitives';

const meta: Meta<typeof Breadcrumbs.Root> = {
  title: 'Components/Breadcrumbs',
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs.Root>;

export const Example: Story = {
  render: () => {
    return (
      <>
        <h2>Example</h2>
        <Breadcrumbs.Root>
          <Breadcrumbs.List style={{ padding: 0, listStyle: 'none', display: 'flex' }}>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={BASE_URL}>Home</Breadcrumbs.Link>
              <Breadcrumbs.Separator>{`>`}</Breadcrumbs.Separator>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={`${BASE_URL}/src`}>Src</Breadcrumbs.Link>
              <Breadcrumbs.Separator>{`>`}</Breadcrumbs.Separator>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={`${BASE_URL}/src/components`}>Components</Breadcrumbs.Link>
              <Breadcrumbs.Separator>{`>`}</Breadcrumbs.Separator>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page>Breadcrumbs</Breadcrumbs.Page>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      </>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <>
        <h2>Disabled</h2>
        <Breadcrumbs.Root disabled={true}>
          <Breadcrumbs.List style={{ padding: 0, listStyle: 'none', display: 'flex' }}>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={BASE_URL}>Home</Breadcrumbs.Link>
              <Breadcrumbs.Separator>{`>`}</Breadcrumbs.Separator>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={`${BASE_URL}/src`}>Src</Breadcrumbs.Link>
              <Breadcrumbs.Separator>{`>`}</Breadcrumbs.Separator>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={`${BASE_URL}/src/components`}>Components</Breadcrumbs.Link>
              <Breadcrumbs.Separator>{`>`}</Breadcrumbs.Separator>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page>Breadcrumbs</Breadcrumbs.Page>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      </>
    );
  },
};

export const WithDisabledLink: Story = {
  render: () => {
    return (
      <>
        <h2>With disabled link</h2>
        <Breadcrumbs.Root>
          <Breadcrumbs.List style={{ padding: 0, listStyle: 'none', display: 'flex' }}>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={BASE_URL}>Home</Breadcrumbs.Link>
              <Breadcrumbs.Separator>{`>`}</Breadcrumbs.Separator>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={`${BASE_URL}/src`} disabled={true}>
                Src
              </Breadcrumbs.Link>
              <Breadcrumbs.Separator>{`>`}</Breadcrumbs.Separator>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={`${BASE_URL}/src/components`}>Components</Breadcrumbs.Link>
              <Breadcrumbs.Separator>{`>`}</Breadcrumbs.Separator>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Page>Breadcrumbs</Breadcrumbs.Page>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs.Root>
      </>
    );
  },
};
