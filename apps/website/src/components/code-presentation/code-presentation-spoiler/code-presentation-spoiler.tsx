import { component$, useContext, Slot } from '@builder.io/qwik';
import { Spoiler } from '@/ui/spoiler';
import { codePresentationSpoilerStyles } from './code-presentation-spoiler.styles';
import { CodePresentationContext } from '../code-presentation-context';

export const CodePresentationSpoiler = component$(() => {
  const { isOpen } = useContext(CodePresentationContext);

  return (
    <Spoiler.Root open={isOpen} class={codePresentationSpoilerStyles()}>
      <Slot />
    </Spoiler.Root>
  );
});
