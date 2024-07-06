import type { PrimitiveSourceProps } from './primitive-source.types';
import { component$ } from '@builder.io/qwik';

/**
 * The `source` element specifies one or more media resources for the `picture`, `audio`, and `video` elements.
 * It is a [void element](https://developer.mozilla.org/en-US/docs/Glossary/Void_element), which means that it has no content and does not require a closing tag.
 * This element is commonly used to offer the same media content in multiple file formats in order
 * to provide compatibility with a broad range of browsers given their differing support for
 * [image file formats](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types) and [media file formats](https://developer.mozilla.org/en-US/docs/Web/Media/Formats).
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source).
 */
export const PrimitiveSource = component$<PrimitiveSourceProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'source';

  return <Component {...others} />;
});
