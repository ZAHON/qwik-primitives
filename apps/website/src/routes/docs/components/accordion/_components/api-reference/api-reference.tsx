import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Root } from './root';
import { Item } from './item';
import { ItemHeader } from './item-header';
import { ItemTrigger } from './item-trigger';
import { ItemIndicator } from './item-indicator';
import { ItemPanel } from './item-panel';
import { ItemContent } from './item-content';

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
      <Item />
      <ItemHeader />
      <ItemTrigger />
      <ItemIndicator />
      <ItemPanel />
      <ItemContent />
    </>
  );
});
