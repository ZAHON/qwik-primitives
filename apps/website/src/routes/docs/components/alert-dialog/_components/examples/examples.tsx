import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { InitiallyOpen } from './initially-open';
import { InitialFocus } from './initial-focus';
import { RestoreFocus } from './restore-focus';
import { Animations } from './animations';
import { StyleTheOverlay } from './style-the-overlay';

export const Examples = component$(() => {
  return (
    <>
      <HeadingLink.Root id="examples" level="2" size="6" class="mt-12 scroll-m-16">
        <HeadingLink.Content>
          Examples
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <InitiallyOpen />
      <InitialFocus />
      <RestoreFocus />
      <Animations />
      <StyleTheOverlay />
    </>
  );
});
