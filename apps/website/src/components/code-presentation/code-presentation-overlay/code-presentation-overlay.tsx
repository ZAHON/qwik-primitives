import { component$, useContext, Slot } from '@builder.io/qwik';
import { codePresentationOverlayStyles } from './code-presentation-overlay.styles';
import { CodePresentationContext } from '../code-presentation-context';

export const CodePresentationOverlay = component$(() => {
  const { isOpen, isPanelOpen } = useContext(CodePresentationContext);

  return (
    !isPanelOpen.value && (
      <div data-state={isOpen.value ? 'open' : 'clsed'} class={codePresentationOverlayStyles()}>
        <Slot />
      </div>
    )
  );
});
