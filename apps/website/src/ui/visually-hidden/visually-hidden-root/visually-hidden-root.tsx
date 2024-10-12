import type { VisuallyHiddenRootProps } from './visually-hidden-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { visuallyHiddenRootStyles } from './visually-hidden-root.styles';

/**
 * Anything you put inside this component will be hidden from the screen but will be announced by screen readers.
 * This component is based on the `span` element.
 */
export const VisuallyHiddenRoot = component$<VisuallyHiddenRootProps>((props) => {
  const { as, class: className, ...others } = props;

  const Component = as || 'span';

  return (
    <Component class={twm(visuallyHiddenRootStyles(), className)} {...others}>
      <Slot />
    </Component>
  );
});
