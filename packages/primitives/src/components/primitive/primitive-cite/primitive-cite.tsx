import type { PrimitiveCiteProps } from './primitive-cite.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `cite` element is used to mark up the title of a cited creative work.
 * The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite).
 */
export const PrimitiveCite = component$<PrimitiveCiteProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'cite';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
