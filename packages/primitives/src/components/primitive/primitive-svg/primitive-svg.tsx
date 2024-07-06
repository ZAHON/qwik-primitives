import type { PrimitiveSvgProps } from './primitive-svg.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `svg` element is a container that defines a new coordinate system and [viewport](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox).
 * It is used as the outermost element of SVG documents, but it can also be used to embed
 * an SVG fragment inside an SVG or HTML document.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg).
 */
export const PrimitiveSvg = component$<PrimitiveSvgProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'svg';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
