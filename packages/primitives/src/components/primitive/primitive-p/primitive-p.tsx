import type { PrimitivePProps } from './primitive-p.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `p` element represents a paragraph.
 * Paragraphs are usually represented in visual media as blocks of text separated from adjacent
 * blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural
 * grouping of related content, such as images or form fields.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p).
 */
export const PrimitiveP = component$<PrimitivePProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'p';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
