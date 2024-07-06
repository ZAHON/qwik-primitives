import type { PrimitiveDelProps } from './primitive-del.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `del` element represents a range of text that has been deleted from a document.
 * This can be used when rendering "track changes" or source code diff information, for example.
 * The `ins` element can be used for the opposite purpose: to indicate text that has been added to the document.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del).
 */
export const PrimitiveDel = component$<PrimitiveDelProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'del';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
