import type { PrimitivePreProps } from './primitive-pre.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `pre` element represents preformatted text which is to be presented exactly as written in the HTML file.
 * The text is typically rendered using a non-proportional, or [monospaced](https://en.wikipedia.org/wiki/Monospaced_font), font.
 * Whitespace inside this element is displayed as written.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre).
 */
export const PrimitivePre = component$<PrimitivePreProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'pre';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
