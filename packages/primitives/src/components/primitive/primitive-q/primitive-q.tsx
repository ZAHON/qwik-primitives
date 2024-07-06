import type { PrimitiveQProps } from './primitive-q.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `q` HTML element indicates that the enclosed text is a short inline quotation.
 * Most modern browsers implement this by surrounding the text in quotation marks.
 * This element is intended for short quotations that don't require paragraph breaks;
 * for long quotations use the `blockquote` element.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q).
 */
export const PrimitiveQ = component$<PrimitiveQProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'q';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
