import type { PrimitiveSearchProps } from './primitive-search.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `search` element is a container representing the parts of the document or application
 * with form controls or other content related to performing a search or filtering operation.
 * The `search` element semantically identifies the purpose of the element's contents as having 
 * search or filtering capabilities. The search or filtering functionality can be for the website 
 * or application, the current web page or document, or the entire Internet or subsection thereof.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search).
 */
export const PrimitiveSearch = component$<PrimitiveSearchProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'search';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
