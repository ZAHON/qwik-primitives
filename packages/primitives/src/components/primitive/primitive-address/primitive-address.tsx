import type { PrimitiveAddressProps } from './primitive-address.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `address` element indicates that the enclosed HTML provides contact
 * information for a person or people, or for an organization.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address).
 */
export const PrimitiveAddress = component$<PrimitiveAddressProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'address';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
