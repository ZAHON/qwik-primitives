import { component$ } from '@builder.io/qwik';
import { Breadcrumbs } from 'qwik-primitives';

export const BreadcrumbsDemo = component$(() => {
  return (
    <Breadcrumbs.Root disabled={true}>
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Docs</Breadcrumbs.Link>
          <Breadcrumbs.Separator>{'>'}</Breadcrumbs.Separator>
        </Breadcrumbs.Item>

        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Components</Breadcrumbs.Link>
          <Breadcrumbs.Separator>{'>'}</Breadcrumbs.Separator>
        </Breadcrumbs.Item>

        <Breadcrumbs.Item>
          <Breadcrumbs.Page>Breadcrumbs</Breadcrumbs.Page>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs.Root>
  );
});