import type { PrimitiveAbbrProps } from './primitive-abbr.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `abbr` element represents an abbreviation or acronym.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr).
 */
export const PrimitiveAbbr = component$<PrimitiveAbbrProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'abbr';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
