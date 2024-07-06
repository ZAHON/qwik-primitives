import type { PrimitiveSampProps } from './primitive-samp.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `samp` element is used to enclose inline text which represents sample (or quoted) output from a computer program.
 * Its contents are typically rendered using the browser's default monospaced font.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp).
 */
export const PrimitiveSamp = component$<PrimitiveSampProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'samp';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
