import type { VisuallyHiddenRootProps } from './visually-hidden-root.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * Anything you put inside this component will be hidden from the screen but will be announced by screen readers.
 * This component is based on the `span` element.
 */
export const VisuallyHiddenRoot = component$<VisuallyHiddenRootProps>((props) => {
  const { as, style, ...others } = props;

  const Component = as || 'span';

  return (
    <Component
      style={{
        position: 'absolute',
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
        ...style,
      }}
      {...others}
    >
      <Slot />
    </Component>
  );
});
