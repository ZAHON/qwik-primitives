import type { PrimitiveInsProps } from './primitive-ins.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `ins` element represents a range of text that has been added to a document.
 * You can use the `del` element to similarly represent a range of text that has been deleted from the document.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins).
 */
export const PrimitiveIns = component$<PrimitiveInsProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'ins';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
