import type { PrimitiveHgroupProps } from './primitive-hgroup.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `hgroup` element represents a heading and related content.
 * It groups a single `h1` – `h6` element with one or more `p`.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup).
 */
export const PrimitiveHgroup = component$<PrimitiveHgroupProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'hgroup';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
