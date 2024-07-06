import type { PrimitiveFigcaptionProps } from './primitive-figcaption.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `figcaption` element represents a caption or legend describing the rest of the
 * contents of its parent `figure` element, providing the `figure` an [accessible description](https://developer.mozilla.org/en-US/docs/Glossary/Accessible_description).
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption).
 */
export const PrimitiveFigcaption = component$<PrimitiveFigcaptionProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'figcaption';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
