import type { PrimitiveDfnProps } from './primitive-dfn.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `dfn` element indicates a term to be defined.
 * The `dfn` element should be used in a complete definition statement,
 * where the full definition of the term can be one of the following:
 * - The ancestor paragraph (a block of text, sometimes marked by a `p` element).
 * - The `dt`/`dd` pairing.
 * - The nearest [section](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#sectioning_content) ancestor of the `dfn` element.
 *
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn).
 */
export const PrimitiveDfn = component$<PrimitiveDfnProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'dfn';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
