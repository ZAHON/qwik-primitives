import type { PrimitiveLabelProps } from './primitive-label.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `label` element represents a caption for an item in a user interface.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label).
 */
export const PrimitiveLabel = component$<PrimitiveLabelProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'label';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
