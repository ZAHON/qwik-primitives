import { component$, useContext, Slot } from '@builder.io/qwik';
import { Spoiler } from '@/ui/spoiler';
import { codePresentationPanelStyles } from './code-presentation-panel.styles';
import { CodePresentationContext } from '../code-presentation-context';

export const CodePresentationPanel = component$(() => {
  const { type, isPanelOpen } = useContext(CodePresentationContext);

  return (
    <Spoiler.Panel
      minHeight={type === 'single' ? '9.5rem' : '12rem'}
      onOpen$={() => (isPanelOpen.value = true)}
      class={codePresentationPanelStyles()}
    >
      <Slot />
    </Spoiler.Panel>
  );
});
