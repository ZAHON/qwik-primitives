import { AspectRatioRootProps } from './aspect-ratio-root.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * Contains all the parts of an aspect ratio.
 * This component is based on the `div` element.
 */
export const AspectRatioRoot = component$<AspectRatioRootProps>((props) => {
  const { as, ratio = 1, style, ...others } = props;

  const Component = as || 'div';

  return (
    <Component
      data-qwik-primitives-aspect-ratio-root=""
      data-scope="aspect-ratio"
      data-part="root"
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: `${100 / ratio}%`,
        ...style,
      }}
      {...others}
    >
      <Slot />
    </Component>
  );
});
