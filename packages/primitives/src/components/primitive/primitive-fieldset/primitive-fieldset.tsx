import type { PrimitiveFieldsetProps } from './primitive-fieldset.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `fieldset` element is used to group several controls as well as labels (`label`) within a web form.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset).
 */
export const PrimitiveFieldset = component$<PrimitiveFieldsetProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'fieldset';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
