import type { PrimitiveOlProps } from './primitive-ol.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `ol` element represents an ordered list of items — typically rendered as a numbered list.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol).
 */
export const PrimitiveOl = component$<PrimitiveOlProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'ol';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
