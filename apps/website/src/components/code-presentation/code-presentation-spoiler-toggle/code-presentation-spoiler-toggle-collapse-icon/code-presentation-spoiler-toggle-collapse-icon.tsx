import { component$ } from '@builder.io/qwik';
import { PinTopIcon } from '@/ui/qwik/icons/pin-top-icon';
import { codePresentationSpoilerToggleCollapseIconStyles } from './code-presentation-spoiler-toggle-collapse-icon.styles';

export const CodePresentationSpoilerToggleCollapseIcon = component$(() => {
  return <PinTopIcon height={15} width={15} class={codePresentationSpoilerToggleCollapseIconStyles()} />;
});
