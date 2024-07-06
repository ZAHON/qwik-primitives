import type { PrimitiveObjectProps } from './primitive-object.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `object` element represents an external resource, which can be treated as
 * an image, a nested browsing context, or a resource to be handled by a plugin.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object).
 */
export const PrimitiveObject = component$<PrimitiveObjectProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'object';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
