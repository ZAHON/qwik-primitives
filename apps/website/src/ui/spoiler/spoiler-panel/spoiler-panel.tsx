import type { SpoilerPanelProps } from './spoiler-panel.types';
import { component$, Slot } from '@builder.io/qwik';
import { Spoiler } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { spoilerPanelStyles } from './spoiler-panel.styles';

/**
 * The panel that expands/collapses.
 * This component is based on the `div` element.
 */
export const SpoilerPanel = component$<SpoilerPanelProps>((props) => {
  const { class: className, ...others } = props;

  return (
    <Spoiler.Panel class={twm(spoilerPanelStyles(), className)} {...others}>
      <Slot />
    </Spoiler.Panel>
  );
});
