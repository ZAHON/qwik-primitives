import { component$, useStyles$ } from '@builder.io/qwik';
import { AspectRatio } from 'qwik-primitives';
import styles from './styles.css?inline';

export const AspectRatioDemo = component$(() => {
  useStyles$(styles);

  return (
    <div class="aspect-ratio-wrapper">
      <AspectRatio.Root ratio={16 / 9}>
        <AspectRatio.Content>
          <img
            class="aspect-ratio-image"
            src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
            alt="Landscape photograph by Tobias Tullius"
          />
        </AspectRatio.Content>
      </AspectRatio.Root>
    </div>
  );
});
