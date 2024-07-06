import type { PrimitiveDtProps } from './primitive-dt.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `dt` element specifies a term in a description or definition list, and as such must be used inside a `dl` element.
 * It is usually followed by a `dd` element; however, multiple `dt` elements in a row indicate several terms that are
 * all defined by the immediate next `dd` element.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt).
 */
export const PrimitiveDt = component$<PrimitiveDtProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'dt';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
