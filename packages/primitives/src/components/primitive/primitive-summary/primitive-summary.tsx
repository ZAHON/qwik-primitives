import type { PrimitiveSummaryProps } from './primitive-summary.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `summary` element specifies a summary, caption, or legend for a `details` element's disclosure box.
 * Clicking the `summary` element toggles the state of the parent `details` element open and closed.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary).
 */
export const PrimitiveSummary = component$<PrimitiveSummaryProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'summary';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
