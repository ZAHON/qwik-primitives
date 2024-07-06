import type { PrimitiveRtProps } from './primitive-rt.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `rt` element specifies the ruby text component of a ruby annotation, which is used to
 * provide pronunciation, translation, or transliteration information for East Asian typography.
 * The `rt` element must always be contained within a `ruby` element.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt).
 */
export const PrimitiveRt = component$<PrimitiveRtProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'rt';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
