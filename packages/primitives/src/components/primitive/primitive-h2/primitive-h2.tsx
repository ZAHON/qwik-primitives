import type { PrimitiveH2Props } from './primitive-h2.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `h1` to `h6` elements represent six levels of section headings.
 * `h1` is the highest section level and `h6` is the lowest.
 * By default, all heading elements create a [block-level](https://developer.mozilla.org/en-US/docs/Glossary/Block-level_content) box in the layout,
 * starting on a new line and taking up the full width available in their containing block.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements).
 */
export const PrimitiveH2 = component$<PrimitiveH2Props>((props) => {
  const { as, ...others } = props;

  const Component = as || 'h2';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
