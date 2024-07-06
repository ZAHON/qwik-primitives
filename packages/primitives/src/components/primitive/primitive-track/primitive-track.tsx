import type { PrimitiveTrackProps } from './primitive-track.types';
import { component$ } from '@builder.io/qwik';

/**
 * The `track` element is used as a child of the media elements, `audio` and `video`.
 * It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles.
 * The tracks are formatted in [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API) format (`.vtt` files) — Web Video Text Tracks.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track).
 */
export const PrimitiveTrack = component$<PrimitiveTrackProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'track';

  return <Component {...others} />;
});
