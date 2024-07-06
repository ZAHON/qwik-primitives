import type { PrimitiveCaptionProps } from './primitive-caption.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `caption` element specifies the caption (or title) of a table, providing the table an [accessible description](https://developer.mozilla.org/en-US/docs/Glossary/Accessible_description).
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption).
 */
export const PrimitiveCaption = component$<PrimitiveCaptionProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'caption';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
