import type { PrimitiveHeaderProps } from './primitive-header.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `header` element represents introductory content, typically a group of introductory or navigational aids.
 * It may contain some heading elements but also a logo, a search form, an author name, and other elements.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header).
 */
export const PrimitiveHeader = component$<PrimitiveHeaderProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'header';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
