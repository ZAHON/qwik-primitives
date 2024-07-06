import type { PrimitiveMeterProps } from './primitive-meter.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `meter` element represents either a scalar value within a known range or a fractional value.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter).
 */
export const PrimitiveMeter = component$<PrimitiveMeterProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'meter';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
