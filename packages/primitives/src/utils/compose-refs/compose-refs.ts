import type { Signal } from '@builder.io/qwik';
import type { Ref } from './compose-refs.types';

export const composeRefs = <T extends Element = Element>(refs: Ref<T>[]) => {
  return (node: T) =>
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref !== undefined) {
        (ref as Signal<T>).value = node;
      }
    });
};
