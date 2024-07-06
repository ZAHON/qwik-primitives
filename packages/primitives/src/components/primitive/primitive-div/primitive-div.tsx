import type { PrimitiveDivProps } from './primitive-div.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `div` element is the generic container for flow content.
 * It has no effect on the content or layout until styled in some way using [CSS](https://developer.mozilla.org/en-US/docs/Glossary/CSS)
 * (e.g. styling is directly applied to it, or some kind of layout model like [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout) is applied to its parent element).
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
 */
export const PrimitiveDiv = component$<PrimitiveDivProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'div';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
