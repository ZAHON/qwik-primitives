import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { AnimatingPanelSize } from './animating-panel-size';

export const Examples = component$(() => {
  return (
    <>
      <HeadingLink.Root id="examples" level="2" size="6" class="mt-12 scroll-m-16">
        <HeadingLink.Content>
          Examples
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <AnimatingPanelSize />
    </>
  );
});
