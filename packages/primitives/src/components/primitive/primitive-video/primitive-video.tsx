import type { PrimitiveVideoProps } from './primitive-video.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `video` element embeds a media player which supports video playback into the document.
 * You can use `video` for audio content as well, but the `audio` element may provide a more appropriate user experience.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video).
 */
export const PrimitiveVideo = component$<PrimitiveVideoProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'video';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
