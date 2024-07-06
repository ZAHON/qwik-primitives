import type { PrimitiveSpanProps } from './primitive-span.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `span` element is a generic inline container for phrasing content, which does not inherently represent anything.
 * It can be used to group elements for styling purposes (using the `class` or `id` attributes), or because they share
 * attribute values, such as `lang`. It should be used only when no other semantic element is appropriate.
 * `span` is very much like a `div` element, but `div` is a [block-level](https://developer.mozilla.org/en-US/docs/Glossary/Block-level_content) element whereas a <span> is an [inline-level](https://developer.mozilla.org/en-US/docs/Glossary/Inline-level_content) element.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span).
 */
export const PrimitiveSpan = component$<PrimitiveSpanProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'span';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
