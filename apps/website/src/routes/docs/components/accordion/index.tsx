import { component$ } from '@builder.io/qwik';
import { TableOfContents } from '@/components/table-of-contents';
import { Hero } from './_components/hero';
import { Features } from './_components/features';
import { Import } from './_components/import';
import { Anatomy } from './_components/anatomy';
import { APIReference } from './_components/api-reference';
import { Examples } from './_components/examples';
import { Accessibility } from './_components/accessibility';

export default component$(() => {
  return (
    <>
      <main class="w-full px-4 lg:w-[calc(100%-16rem)] lg:pl-16 xl:w-[calc(100%-32rem)] xl:pr-16">
        <article>
          <Hero />
          <Features />
          <Import />
          <Anatomy />
          <APIReference />
          <Examples />
          <Accessibility />
        </article>
      </main>

      <div class="hidden w-64 shrink-0 lg:block">
        <aside class="fixed -mt-10 flex h-[calc(100%-3rem)] w-64 items-start justify-end overflow-y-auto px-4 py-10">
          <TableOfContents
            data={[
              { label: 'Features', href: '#features' },
              { label: 'Import', href: '#import' },
              { label: 'Anatomy', href: '#anatomy' },
              {
                label: 'API Reference',
                href: '#api-reference',
                data: [
                  { label: 'Root', href: '#root' },
                  { label: 'Item', href: '#item' },
                  { label: 'ItemHeader', href: '#item-header' },
                  { label: 'ItemTrigger', href: '#item-trigger' },
                  { label: 'ItemIndicator', href: '#item-indicator' },
                  { label: 'ItemPanel', href: '#item-panel' },
                  { label: 'ItemContent', href: '#item-content' },
                ],
              },
              {
                label: 'Examples',
                href: '#examples',
                data: [
                  { label: 'Expanded by default', href: '#expanded-by-default' },
                  { label: 'Allow collapsing all items', href: '#allow-collapsing-all-items' },
                  { label: 'Multiple items open at the same time', href: '#multiple-items-open-at-the-same-time' },
                  { label: 'Rotated icon when item open', href: '#rotated-icon-when-item-open' },
                  { label: 'Animating item panel size', href: '#animating-item-panel-size' },
                ],
              },
              {
                label: 'Accessibility',
                href: '#accessibility',
                data: [{ label: 'Keyboard Interactions', href: '#keyboard-interactions' }],
              },
            ]}
          />
        </aside>
      </div>
    </>
  );
});
