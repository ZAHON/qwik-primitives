import type { FocusTrapAPI } from './create-focus-traps-stack.types';

export const createFocusTrapsStack = () => {
  /** A stack of focus traps, with the active one at the top */
  let stack: FocusTrapAPI[] = [];

  const arrayRemove = <T>(array: T[], item: T) => {
    const updatedArray = [...array];
    const index = updatedArray.indexOf(item);

    if (index !== -1) {
      updatedArray.splice(index, 1);
    }

    return updatedArray;
  };

  return {
    add(focusTrap: FocusTrapAPI) {
      // pause the currently active focus scope (at the top of the stack)
      const activeFocusTrap = stack[0];

      if (focusTrap !== activeFocusTrap) {
        activeFocusTrap?.pause();
      }

      // remove in case it already exists (because we'll re-add it at the top of the stack)
      stack = arrayRemove(stack, focusTrap);
      stack.unshift(focusTrap);
    },

    remove(focusTrap: FocusTrapAPI) {
      stack = arrayRemove(stack, focusTrap);
      stack[0]?.resume();
    },
  };
};
