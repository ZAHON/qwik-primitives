import { component$ } from '@builder.io/qwik';
import { PinBottomIcon } from '@/ui/qwik/icons/pin-bottom-icon';
import { codePresentationSpoilerToggleExpandIconStyles } from './code-presentation-spoiler-toggle-expand-icon.styles';

export const CodePresentationSpoilerToggleExpandIcon = component$(() => {
  return <PinBottomIcon height={15} width={15} class={codePresentationSpoilerToggleExpandIconStyles()} />;
});
