import type { PrimitiveDlProps } from './primitive-dl.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `dl` element represents a description list.
 * The element encloses a list of groups of terms (specified using the `dt` element) and descriptions (provided by `dd` elements).
 * Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl).
 */
export const PrimitiveDl = component$<PrimitiveDlProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'dl';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
