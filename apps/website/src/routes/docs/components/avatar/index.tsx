import { component$ } from '@builder.io/qwik';
import { TableOfContents } from '@/components/table-of-contents';
import { Hero } from './_components/hero';
import { Features } from './_components/features';
import { Import } from './_components/import';
import { APIReference } from './_components/api-reference';
import { Examples } from './_components/examples';

export default component$(() => {
  return (
    <>
      <main class="w-full px-4 lg:w-[calc(100%-16rem)] lg:pl-16 xl:w-[calc(100%-32rem)]">
        <article>
          <Hero />
          <Features />
          <Import />
          <APIReference />
          <Examples />
        </article>
      </main>

      <div class="hidden w-64 shrink-0 lg:block">
        <aside class="fixed -mt-10 flex h-[calc(100%-3rem)] w-64 items-start justify-end overflow-y-auto px-4 py-10">
          <TableOfContents
            data={[
              { label: 'Features', href: '#features' },
              { label: 'Import', href: '#import' },
              {
                label: 'API Reference',
                href: '#api-reference',
                data: [
                  { label: 'Root', href: '#root' },
                  { label: 'Image', href: '#image' },
                  { label: 'Fallback', href: '#fallback' },
                ],
              },
              {
                label: 'Examples',
                href: '#examples',
                data: [{ label: 'Avoid flash during loading', href: '#avoid-flash-during-loading' }],
              },
            ]}
          />
        </aside>
      </div>
    </>
  );
});
