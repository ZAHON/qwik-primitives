import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Disabled } from './disabled';
import { DisabledLink } from './disabled-link';

export const Examples = component$(() => {
  return (
    <>
      <HeadingLink.Root id="examples" level="2" size="6" class="mt-12 scroll-m-16">
        <HeadingLink.Content>
          Examples
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Disabled />
      <DisabledLink />
    </>
  );
});
