import { component$, useContext, Slot } from '@builder.io/qwik';
import { codePresentationSpoilerOverlayStyles } from './code-presentation-spoiler-overlay.styles';
import { CodePresentationContext } from '../code-presentation-context';

export const CodePresentationSpoilerOverlay = component$(() => {
  const { isSpoilerOpen } = useContext(CodePresentationContext);

  return (
    <div
      inert={isSpoilerOpen.value}
      data-state={isSpoilerOpen.value ? 'open' : 'closed'}
      class={codePresentationSpoilerOverlayStyles()}
    >
      <Slot />
    </div>
  );
});
