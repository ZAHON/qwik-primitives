import type { PrimitivePictureProps } from './primitive-picture.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `picture` element contains zero or more `source` elements and one `img`
 * element to offer alternative versions of an image for different display/device scenarios.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture).
 */
export const PrimitivePicture = component$<PrimitivePictureProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'picture';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
