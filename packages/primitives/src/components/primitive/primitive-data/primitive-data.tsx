import type { PrimitiveDataProps } from './primitive-data.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `data` element links a given piece of content with a machine-readable translation.
 * If the content is time- or date-related, the `time` element must be used.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data).
 */
export const PrimitiveData = component$<PrimitiveDataProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'data';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
