import type { PrimitiveIframeProps } from './primitive-iframe.types';
import { component$ } from '@builder.io/qwik';

/**
 * The `iframe` element represents a nested [browsing context](https://developer.mozilla.org/en-US/docs/Glossary/Browsing_context), embedding another HTML page into the current one.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).
 */
export const PrimitiveIframe = component$<PrimitiveIframeProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'iframe';

  return <Component {...others} />;
});
