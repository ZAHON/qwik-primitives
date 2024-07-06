import type { PrimitiveAsideProps } from './primitive-aside.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `aside` element represents a portion of a document whose content is only indirectly related to
 * the document's main content. Asides are frequently presented as sidebars or call-out boxes.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside).
 */
export const PrimitiveAside = component$<PrimitiveAsideProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'aside';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
