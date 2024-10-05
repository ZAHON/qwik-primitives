export const getTriggers = (listRef: HTMLElement | undefined) => {
  if (!listRef) return [];

  const orderedNodes = Array.from(listRef.querySelectorAll<HTMLElement>('[data-qwik-primitives-tabs-trigger]'));

  const orderedTriggers = orderedNodes.map((trigger) => {
    const id = trigger.getAttribute('id');
    const active = trigger.getAttribute('data-state') === 'active';
    const focusable = !trigger.hasAttribute('data-disabled');

    return { ref: trigger, id, active, focusable };
  });

  return orderedTriggers;
};
