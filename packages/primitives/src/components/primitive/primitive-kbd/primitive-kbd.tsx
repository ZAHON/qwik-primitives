import type { PrimitiveKbdProps } from './primitive-kbd.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `kbd` element represents a span of inline text denoting textual
 * user input from a keyboard, voice input, or any other text entry device.
 * By convention, the [user agent](https://developer.mozilla.org/en-US/docs/Glossary/User_agent) defaults to rendering the contents of a `kbd`
 * element using its default monospace font, although this is not mandated by the HTML standard.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd).
 */
export const PrimitiveKbd = component$<PrimitiveKbdProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'kbd';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
