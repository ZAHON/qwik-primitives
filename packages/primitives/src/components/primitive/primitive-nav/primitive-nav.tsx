import type { PrimitiveNavProps } from './primitive-nav.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `nav` element represents a section of a page whose purpose is to provide
 * navigation links, either within the current document or to other documents.
 * Common examples of navigation sections are menus, tables of contents, and indexes.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav).
 */
export const PrimitiveNav = component$<PrimitiveNavProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'nav';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
