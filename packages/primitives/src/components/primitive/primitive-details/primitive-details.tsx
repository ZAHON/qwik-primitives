import type { PrimitiveDetailsProps } from './primitive-details.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `details` element creates a disclosure widget in which information
 * is visible only when the widget is toggled into an "open" state.
 * A summary or label must be provided using the `summary` element.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details).
 */
export const PrimitiveDetails = component$<PrimitiveDetailsProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'details';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
