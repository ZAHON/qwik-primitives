import { component$, useContext, $, Slot } from '@builder.io/qwik';
import { Spoiler } from 'qwik-primitives';
import { codePresentationSpoilerStyles } from './code-presentation-spoiler.styles';
import { CodePresentationContext } from '../code-presentation-context';

export const CodePresentationSpoiler = component$(() => {
  const { isSpoilerOpen } = useContext(CodePresentationContext);

  const handleOpenChange$ = $((open: boolean) => {
    isSpoilerOpen.value = open;
  });

  return (
    <Spoiler.Root open={isSpoilerOpen} onOpenChange$={handleOpenChange$} class={codePresentationSpoilerStyles()}>
      <Slot />
    </Spoiler.Root>
  );
});
