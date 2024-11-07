import { component$, Slot } from '@builder.io/qwik';
import { Spoiler } from '@/ui/spoiler';
import { codePresentationContentStyles } from './code-presentation-content.styles';

export const CodePresentationContent = component$(() => {
  return (
    <Spoiler.Content class={codePresentationContentStyles()}>
      <Slot />
    </Spoiler.Content>
  );
});
