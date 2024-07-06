import type { PrimitiveTbodyProps } from './primitive-tbody.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `tbody` element encapsulates a set of table rows (`tr` elements),
 * indicating that they comprise the body of a table's (main) data.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody).
 */
export const PrimitiveTbody = component$<PrimitiveTbodyProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'tbody';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
