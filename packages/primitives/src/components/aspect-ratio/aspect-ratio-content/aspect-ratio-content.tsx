import { AspectRatioContentProps } from './aspect-ratio-content.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * Contains the content you want to constrain to a given ratio.
 * This component is based on the `div` element.
 */
export const AspectRatioContent = component$<AspectRatioContentProps>((props) => {
  const { as, style, ...others } = props;

  const Component = as || 'div';

  return (
    <Component
      data-qwik-primitives-aspect-ratio-content=""
      data-scope="aspect-ratio"
      data-part="content"
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...style,
      }}
      {...others}
    >
      <Slot />
    </Component>
  );
});
