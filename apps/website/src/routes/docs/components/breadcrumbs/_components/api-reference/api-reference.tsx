import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Root } from './root';
import { List } from './list';
import { Item } from './item';
import { Link } from './link';
import { Page } from './page';
import { Separator } from './separator';

export const APIReference = component$(() => {
  return (
    <>
      <HeadingLink.Root id="api-reference" level="2" size="6" class="mt-12 scroll-m-16">
        <HeadingLink.Content>
          API Reference
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Root />
      <List />
      <Item />
      <Link />
      <Page />
      <Separator />
    </>
  );
});
