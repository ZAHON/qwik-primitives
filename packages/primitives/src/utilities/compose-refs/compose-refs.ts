import type { Ref } from './compose-refs.types';
import type { Signal } from '@builder.io/qwik';
import { $ } from '@builder.io/qwik';

export const composeRefs = <T extends Element = Element>(refs: Ref<T>[]) => {
  return $((node: T) =>
    // eslint-disable-next-line qwik/valid-lexical-scope
    refs?.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref !== undefined) {
        (ref as Signal<T>).value = node;
      }
    })
  );
};
