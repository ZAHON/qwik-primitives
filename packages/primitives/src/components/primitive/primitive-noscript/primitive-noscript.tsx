import type { PrimitiveNoscriptProps } from './primitive-noscript.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `noscript` element defines a section of HTML to be inserted if a script type
 * on the page is unsupported or if scripting is currently turned off in the browser.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript).
 */
export const PrimitiveNoscript = component$<PrimitiveNoscriptProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'noscript';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
