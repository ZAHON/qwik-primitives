import { component$, useContext, Slot } from '@builder.io/qwik';
import { codePresentationTabsPanelStyles } from './code-presentation-tabs-panel.styles';
import { CodePresentationContext } from '../code-presentation-context';

export const CodePresentationTabsPanel = component$(() => {
  const { isSpoilerOpen } = useContext(CodePresentationContext);

  return (
    <div inert={!isSpoilerOpen.value} aria-hidden={!isSpoilerOpen.value} class={codePresentationTabsPanelStyles()}>
      <Slot />
    </div>
  );
});
