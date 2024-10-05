import type { TabsListProps } from './tabs-list.types';
import { component$, useContext, useSignal, useTask$, $, Slot } from '@builder.io/qwik';
import { getTriggers, focusFirstTrigger } from '../utilities';
import { composeRefs } from '@/utilities';
import { TabsContext } from '../tabs-context';

/**
 * Contains the triggers that are aligned along the edge of the active content.
 * This component is based on the `div` element.
 */
export const TabsList = component$<TabsListProps>((props) => {
  const { as, ref, loop = true, onMouseDown$, onFocus$, style, ...others } = props;

  const { listRef, isLoop, currentTabStopId, isTabbingBackOut, orientation } = useContext(TabsContext);

  const isClickFocus = useSignal(false);
  const shouldHaveOutline = useSignal(false);

  useTask$(({ track }) => {
    track(() => loop);

    isLoop.value = loop;
  });

  const handleMouseDown$ = $(() => {
    isClickFocus.value = true;
  });

  const handleFocus$ = $((event: FocusEvent, currentTarget: HTMLElement) => {
    // We normally wouldn't need this check, because we already check
    // that the focus is on the current target and not bubbling to it.
    // We do this because Safari doesn't focus buttons when clicked, and
    // instead, the wrapper will get focused and not through a bubbling event.
    const isKeyboardFocus = !isClickFocus.value;

    if (event.target === currentTarget && isKeyboardFocus && !isTabbingBackOut.value) {
      const triggers = getTriggers(listRef.value).filter(({ focusable }) => focusable);

      if (triggers.length) {
        shouldHaveOutline.value = false;

        const activeTrigger = triggers.find(({ active }) => active);
        const currentTrigger = triggers.find(({ id }) => id === currentTabStopId.value);
        const candidateTriggers = [activeTrigger, currentTrigger, ...triggers].filter(Boolean) as typeof triggers;
        const candidateNodes = candidateTriggers.map(({ ref }) => ref);

        focusFirstTrigger(candidateNodes);
      } else {
        shouldHaveOutline.value = true;
      }
    }

    isClickFocus.value = false;
  });

  const Component = as || 'div';

  return (
    <Component
      ref={composeRefs([ref, listRef])}
      role="tablist"
      tabIndex={isTabbingBackOut.value ? -1 : 0}
      aria-orientation={orientation}
      data-qwik-primitives-tabs-list=""
      data-scope="tabs"
      data-part="list"
      data-orientation={orientation}
      onMouseDown$={[onMouseDown$, handleMouseDown$]}
      onFocus$={[onFocus$, handleFocus$]}
      style={{ outline: shouldHaveOutline.value ? undefined : 'none', ...style }}
      {...others}
    >
      <Slot />
    </Component>
  );
});
