import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { TableOfContents } from '@/components/table-of-contents';
import { Hero } from './_components/hero';
import { Features } from './_components/features';
import { Import } from './_components/import';
import { Anatomy } from './_components/anatomy';
import { APIReference } from './_components/api-reference';
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
          <Accessibility />
        </article>
      </main>

      <div class="hidden w-64 shrink-0 lg:block">
        <aside class="fixed -mt-10 flex h-[calc(100%-3rem)] w-64 justify-start overflow-y-auto px-4 py-10">
          <TableOfContents
            data={[
              { label: 'Features', href: '#features' },
              { label: 'Import', href: '#import' },
              { label: 'Anatomy', href: '#anatomy' },
              {
                label: 'API Reference',
                href: '#api-reference',
                data: [{ label: 'Root', href: '#root' }],
              },
              { label: 'Accessibility', href: '#accessibility' },
            ]}
          />
        </aside>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Alert',
  meta: [
    {
      name: 'description',
      content: `Display a brief, important message in a way that attracts the user's attention without interrupting the user's task.`,
    },
  ],
};
