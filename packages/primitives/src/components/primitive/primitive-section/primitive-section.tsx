import type { PrimitiveSectionProps } from './primitive-section.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `section` element represents a generic standalone section of a document, which doesn't have a more
 * specific semantic element to represent it. Sections should always have a heading, with very few exceptions.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section).
 */
export const PrimitiveSection = component$<PrimitiveSectionProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'section';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
