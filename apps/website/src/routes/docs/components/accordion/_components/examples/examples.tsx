import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { ExpandedByDefault } from './expanded-by-default';
import { AllowCollapsingAllItems } from './allow-collapsing-all-items';
import { MultipleItemsOpenAtTheSameTime } from './multiple-items-open-at-the-same-time';
import { RotatedIconWhenItemOpen } from './rotated-icon-when-item-open';
import { AnimatingItemPanelSize } from './animating-item-panel-size';

export const Examples = component$(() => {
  return (
    <>
      <HeadingLink.Root id="examples" level="2" size="6" class="mt-12 scroll-m-16">
        <HeadingLink.Content>
          Examples
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <ExpandedByDefault />
      <AllowCollapsingAllItems />
      <MultipleItemsOpenAtTheSameTime />
      <RotatedIconWhenItemOpen />
      <AnimatingItemPanelSize />
    </>
  );
});
