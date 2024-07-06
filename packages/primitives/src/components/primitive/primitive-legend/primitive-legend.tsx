import type { PrimitiveLegendProps } from './primitive-legend.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `legend` element represents a caption for the content of its parent `fieldset`.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend).
 */
export const PrimitiveLegend = component$<PrimitiveLegendProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'legend';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
