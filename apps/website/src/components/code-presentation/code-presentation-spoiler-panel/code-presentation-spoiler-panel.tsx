import { component$, Slot } from '@builder.io/qwik';
import { Spoiler } from 'qwik-primitives';
import { codePresentationSpoilerPanelStyles } from './code-presentation-spoiler-panel.styles';

export const CodePresentationSpoilerPanel = component$(() => {
  return (
    <Spoiler.Panel minHeight="12rem" class={codePresentationSpoilerPanelStyles()}>
      <Slot />
    </Spoiler.Panel>
  );
});
