import { component$, Slot } from '@builder.io/qwik';
import { codePresentationSpoilerToggleIndicatorStyles } from './code-presentation-spoiler-toggle-indicator.styles';

export const CodePresentationSpoilerToggleIndicator = component$(() => {
  return (
    <span aria-hidden="true" class={codePresentationSpoilerToggleIndicatorStyles()}>
      <Slot />
    </span>
  );
});
