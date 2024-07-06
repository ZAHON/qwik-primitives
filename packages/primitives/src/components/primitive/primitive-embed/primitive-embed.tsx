import type { PrimitiveEmbedProps } from './primitive-embed.types';
import { component$ } from '@builder.io/qwik';

/**
 * The `embed` element embeds external content at the specified point in the document.
 * This content is provided by an external application or other source of interactive content such as a browser plug-in.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed).
 */
export const PrimitiveEmbed = component$<PrimitiveEmbedProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'embed';

  return <Component {...others} />;
});
