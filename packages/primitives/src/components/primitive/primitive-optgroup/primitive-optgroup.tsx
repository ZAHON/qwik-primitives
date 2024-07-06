import type { PrimitiveOptgroupProps } from './primitive-optgroup.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `optgroup` element creates a grouping of options within a `select` element.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup).
 */
export const PrimitiveOptgroup = component$<PrimitiveOptgroupProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'optgroup';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
