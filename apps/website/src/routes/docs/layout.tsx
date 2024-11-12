import { component$, Slot } from '@builder.io/qwik';
import { DocsNav } from '@/components/docs-nav';

export default component$(() => {
  return (
    <div class="mx-auto flex max-w-screen-2xl py-[calc(5.5rem+1px)]">
      <div class="hidden w-64 shrink-0 lg:block">
        <aside class="fixed -mt-10 h-[calc(100%-3rem)] w-64 overflow-y-auto px-4 py-10">
          <DocsNav variant="desktop" />
        </aside>
      </div>

      <Slot />
    </div>
  );
});
