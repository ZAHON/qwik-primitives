import type { PrimitiveAProps } from './primitive-a.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `a` element (or anchor element), with [its `href` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href), creates a hyperlink to web
 * pages, files, email addresses, locations in the same page, or anything else a URL can address.
 * Content within each `a` should indicate the link's destination.
 * If the href attribute is present, pressing the enter key while focused on the `a` element will activate it.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).
 */
export const PrimitiveA = component$<PrimitiveAProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'a';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
