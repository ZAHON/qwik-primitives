import type { SpinnerRootProps } from './spinner-root.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * Contains all the parts of a spinner.
 * This component is based on the `span` element.
 */
export const SpinnerRoot = component$<SpinnerRootProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'span';

  return (
    <Component role="status" data-qwik-primitives-spinner-root="" data-scope="spinner" data-part="root" {...others}>
      <Slot />
    </Component>
  );
});
