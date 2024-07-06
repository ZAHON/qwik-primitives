import type { PrimitiveMainProps } from './primitive-main.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `main` element represents the dominant content of the `body` of a document.
 * The main content area consists of content that is directly related to or expands
 * upon the central topic of a document, or the central functionality of an application.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main).
 */
export const PrimitiveMain = component$<PrimitiveMainProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'main';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
