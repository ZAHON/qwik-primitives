import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { UnorderedList } from '@/ui/unordered-list';

export const Features = component$(() => {
  return (
    <>
      <HeadingLink.Root id="features" level="2" size="6" class="mt-12 scroll-m-16">
        <HeadingLink.Content>
          Features
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <UnorderedList.Root class="mt-3">
        <UnorderedList.Item>Automatic and manual control over when the image renders.</UnorderedList.Item>
        <UnorderedList.Item>Optionally delay fallback rendering to avoid content flashing.</UnorderedList.Item>
      </UnorderedList.Root>
    </>
  );
});
