import { component$ } from '@builder.io/qwik';
import { Breadcrumbs } from 'qwik-primitives';

const BASE_URL = 'https://github.com/ZAHON/qwik-primitives/tree/main/packages/primitives';

export const Example = component$(() => {
  return (
    <>
      <h2>Example</h2>
      <Breadcrumbs.Root>
        <Breadcrumbs.List>
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
});
