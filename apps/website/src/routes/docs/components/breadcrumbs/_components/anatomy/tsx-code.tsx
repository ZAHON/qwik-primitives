import { component$ } from '@builder.io/qwik';
import { Breadcrumbs } from 'qwik-primitives';

export const BreadcrumbsDemo = component$(() => {
  return (
    <Breadcrumbs.Root>
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link />
          <Breadcrumbs.Separator />
        </Breadcrumbs.Item>

        <Breadcrumbs.Item>
          <Breadcrumbs.Page />
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs.Root>
  );
});
