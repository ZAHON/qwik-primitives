import type { SpoilerContentProps } from './spoiler-content.types';
import { component$, useContext, useSignal, useTask$, Slot } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
import { composeRefs } from '@/utilities/compose-refs';
import { SpoilerContext } from '../spoiler-context';

/**
 * The component that contains the spoiler content.
 * Must be rendered inside `Spoiler.Panel`.
 * This component is based on the `div` element.
 */
export const SpoilerContent = component$<SpoilerContentProps>((props) => {
  const { as, ref, ...others } = props;

  const { isOpen, isDisabled, contentHeight } = useContext(SpoilerContext);

  const contentRef = useSignal<HTMLElement | undefined>(undefined);

  useTask$(({ track, cleanup }) => {
    track(() => isOpen.value);

    if (isServer) return;

    if (contentRef.value) {
      contentHeight.value = contentRef.value.offsetHeight;
    }

    if (contentRef.value) {
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) return;
        if (!entries.length) return;

        const entry = entries[0];

        let height: number | undefined = undefined;

        if ('borderBoxSize' in entry) {
          const borderSizeEntry = entry['borderBoxSize'];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;

          height = borderSize['blockSize'];
        } else {
          if (contentRef.value) {
            height = contentRef.value.offsetHeight;
          }
        }

        contentHeight.value = height;
      });

      resizeObserver.observe(contentRef.value, { box: 'border-box' });

      cleanup(() => {
        if (contentRef.value) {
          resizeObserver.unobserve(contentRef.value);
        }
      });
    }
  });

  const Component = as || 'div';

  return (
    <Component
      ref={composeRefs([ref, contentRef])}
      data-qwik-primitives-spoiler-content=""
      data-scope="spoiler"
      data-part="content"
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={isDisabled.value ? '' : undefined}
      {...others}
    >
      <Slot />
    </Component>
  );
});
