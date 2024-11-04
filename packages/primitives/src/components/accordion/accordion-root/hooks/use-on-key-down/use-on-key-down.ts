import { sync$, $, useOn } from '@builder.io/qwik';

export const useOnKeyDown = () => {
  const handleKeyDownSync$ = sync$((event: KeyboardEvent, currentTarget: HTMLElement) => {
    if (!['Home', 'End', 'ArrowDown', 'ArrowUp'].includes(event.key)) return;

    const target = event.target as HTMLElement;
    const triggerCollection = Array.from(
      currentTarget.querySelectorAll<HTMLButtonElement>('[data-qwik-primitives-accordion-item-trigger]')
    ).filter((trigger) => !trigger.disabled);
    const triggerIndex = triggerCollection.findIndex((trigger) => trigger === target);

    if (triggerIndex === -1) return;

    // Prevents page scroll while user is navigating
    event.preventDefault();
  });

  const handleKeyDown$ = $((event: KeyboardEvent, currentTarget: HTMLElement) => {
    if (!['Home', 'End', 'ArrowDown', 'ArrowUp'].includes(event.key)) return;

    const target = event.target as HTMLElement;
    const triggerCollection = Array.from(
      currentTarget.querySelectorAll<HTMLButtonElement>('[data-qwik-primitives-accordion-item-trigger]')
    ).filter((trigger) => !trigger.disabled);
    const triggerIndex = triggerCollection.findIndex((trigger) => trigger === target);
    const triggerCount = triggerCollection.length;

    if (triggerIndex === -1) return;

    let nextIndex = triggerIndex;

    const homeIndex = 0;
    const endIndex = triggerCount - 1;

    switch (event.key) {
      case 'Home':
        nextIndex = homeIndex;
        break;
      case 'End':
        nextIndex = endIndex;
        break;
      case 'ArrowDown':
        nextIndex = triggerIndex + 1;
        if (nextIndex > endIndex) {
          nextIndex = homeIndex;
        }
        break;
      case 'ArrowUp':
        nextIndex = triggerIndex - 1;
        if (nextIndex < homeIndex) {
          nextIndex = endIndex;
        }
        break;
    }

    const clampedIndex = nextIndex % triggerCount;

    triggerCollection[clampedIndex].focus();
  });

  useOn('keydown', handleKeyDownSync$);
  useOn('keydown', handleKeyDown$);
};
