import type { PrimitiveMapProps } from './primitive-map.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `map` element is used with `area` elements to define an image map (a clickable link area).
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map).
 */
export const PrimitiveMap = component$<PrimitiveMapProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'map';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
