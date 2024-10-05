import type { TabsTriggerProps } from './tabs-trigger.types';
import { component$, useContext, useComputed$, sync$, $, Slot } from '@builder.io/qwik';
import { getFocusIntent, getTriggers, wrapArray, focusFirstTrigger } from '../utilities';
import { TabsContext } from '../tabs-context';

/**
 * The button that activates its associated content.
 * This component is based on the `button` element.
 */
export const TabsTrigger = component$<TabsTriggerProps>((props) => {
  const { as, value, disabled, onMouseDown$, onKeyDown$, onFocus$, ...others } = props;

  const {
    tabsValue,
    setTabsValue$,
    tabsId,
    listRef,
    isLoop,
    currentTabStopId,
    isTabbingBackOut,
    orientation,
    activationMode,
  } = useContext(TabsContext);

  const triggerId = useComputed$(() => `qwik-primitives-tabs-${tabsId}-trigger-${value}`);

  const handleMouseDownSync$ = sync$((event: MouseEvent, currentTarget: HTMLElement) => {
    const disabled = currentTarget.hasAttribute('data-disabled');

    // prevent focus to avoid accidental activation
    if (!(!disabled && event.button === 0 && event.ctrlKey === false)) event.preventDefault();

    // We prevent focusing non-focusable items on `mousedown`.
    // Even though the item has tabIndex={-1}, that only means take it out of the tab order.
    if (disabled) event.preventDefault();
  });

  const handleMouseDown$ = $((event: MouseEvent) => {
    // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
    // but not when the control key is pressed (avoiding MacOS right click)
    if (!disabled && event.button === 0 && event.ctrlKey === false) setTabsValue$(value);

    // Safari doesn't focus a button when clicked so we run our logic on mousedown also
    if (!disabled) currentTabStopId.value = triggerId.value;
  });

  const handleKeyDownSync$ = sync$((event: KeyboardEvent, currentTarget: HTMLElement) => {
    if (event.key === 'Tab' && event.shiftKey) return;
    if (event.target !== currentTarget) return;

    const getFocusIntent = (event: KeyboardEvent, orientation: string | null) => {
      const key = event.key;

      if (orientation === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(key)) return undefined;
      if (orientation === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(key)) return undefined;

      // prettier-ignore
      const MAP_KEY_TO_FOCUS_INTENT: Record<string, 'first' | 'last' | 'prev' | 'next'> = {
				ArrowLeft: 'prev', ArrowUp: 'prev',
				ArrowRight: 'next', ArrowDown: 'next',
				PageUp: 'first', Home: 'first',
				PageDown: 'last', End: 'last',
			};

      return MAP_KEY_TO_FOCUS_INTENT[key];
    };

    const orientation = currentTarget.getAttribute('data-orientation');
    const focusIntent = getFocusIntent(event, orientation);

    if (focusIntent !== undefined) {
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
      event.preventDefault();
    }
  });

  const handleKeyDown$ = $((event: KeyboardEvent, currentTarget: HTMLElement) => {
    if ([' ', 'Enter'].includes(event.key)) setTabsValue$(value);

    if (event.key === 'Tab' && event.shiftKey) {
      if (listRef.value) {
        listRef.value.tabIndex = -1;
        isTabbingBackOut.value = true;

        requestAnimationFrame(() => {
          setTimeout(() => {
            if (listRef.value) listRef.value.tabIndex = 0;
            isTabbingBackOut.value = false;
          });
        });
      }

      return;
    }

    if (event.target !== currentTarget) return;

    const focusIntent = getFocusIntent(event, orientation);

    if (focusIntent !== undefined) {
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;

      const triggers = getTriggers(listRef.value).filter(({ focusable }) => focusable);
      let candidateNodes = triggers.map(({ ref }) => ref);

      if (focusIntent === 'last') candidateNodes.reverse();
      else if (focusIntent === 'prev' || focusIntent === 'next') {
        if (focusIntent === 'prev') candidateNodes.reverse();
        const currentIndex = candidateNodes.indexOf(currentTarget);

        candidateNodes = isLoop.value
          ? wrapArray(candidateNodes, currentIndex + 1)
          : candidateNodes.slice(currentIndex + 1);
      }

      setTimeout(() => focusFirstTrigger(candidateNodes));
    }
  });

  const handleFocus$ = $(() => {
    // handle "automatic" activation if necessary
    // ie. activate tab following focus
    if (value !== tabsValue.value && !disabled && activationMode !== 'manual') setTabsValue$(value);

    if (!disabled) currentTabStopId.value = triggerId.value;
  });

  const Component = as || 'button';

  return (
    <Component
      type="button"
      role="tab"
      disabled={disabled}
      id={triggerId.value}
      tabIndex={triggerId.value === currentTabStopId.value ? 0 : -1}
      aria-selected={value === tabsValue.value}
      aria-controls={`qwik-primitives-tabs-${tabsId}-content-${value}`}
      data-qwik-primitives-tabs-trigger=""
      data-scope="tabs"
      data-part="trigger"
      data-state={value === tabsValue.value ? 'active' : 'inactive'}
      data-disabled={disabled ? '' : undefined}
      data-orientation={orientation}
      onMouseDown$={[onMouseDown$, handleMouseDownSync$, handleMouseDown$]}
      onKeyDown$={[onKeyDown$, handleKeyDownSync$, handleKeyDown$]}
      onFocus$={[onFocus$, handleFocus$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
