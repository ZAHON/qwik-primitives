import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { CodeBlock } from '@/components/code-block';

export const Import = component$(() => {
  return (
    <>
      <HeadingLink.Root id="import" level="2" size="6" class="mt-12 scroll-m-16">
        <HeadingLink.Content>
          Import
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <CodeBlock type="single" code="import { Avatar } from 'qwik-primitives';" language="shell" class="mt-6" />
    </>
  );
});
