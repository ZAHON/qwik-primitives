import type { PrimitiveSelectProps } from './primitive-select.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `select` element represents a control that provides a menu of options.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select).
 */
export const PrimitiveSelect = component$<PrimitiveSelectProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'select';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
