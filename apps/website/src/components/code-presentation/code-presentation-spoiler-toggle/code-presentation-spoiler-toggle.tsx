import { component$, useContext } from '@builder.io/qwik';
import { Spoiler } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { VisuallyHidden } from '@/ui/qwik/visually-hidden';
import { buttonStyles } from '@/styles/shared/button';
import { CodePresentationSpoilerToggleIndicator } from './code-presentation-spoiler-toggle-indicator';
import { CodePresentationSpoilerToggleCollapseIcon } from './code-presentation-spoiler-toggle-collapse-icon';
import { CodePresentationSpoilerToggleExpandIcon } from './code-presentation-spoiler-toggle-expand-icon';
import { codePresentationSpoilerToggleStyles } from './code-presentation-spoiler-toggle.styles';
import { CodePresentationContext } from '../code-presentation-context';

const iconButtonStyles = buttonStyles({
  size: '1',
  shape: 'icon',
  variant: 'soft',
  color: 'default',
  highContrast: false,
});

export const CodePresentationSpoilerToggle = component$(() => {
  const { isSpoilerOpen } = useContext(CodePresentationContext);

  return (
    <Spoiler.Trigger class={twm(iconButtonStyles, codePresentationSpoilerToggleStyles())}>
      <CodePresentationSpoilerToggleIndicator>
        <CodePresentationSpoilerToggleCollapseIcon />
        <CodePresentationSpoilerToggleExpandIcon />
      </CodePresentationSpoilerToggleIndicator>

      <VisuallyHidden.Root>{isSpoilerOpen.value ? 'Collapse' : 'Expand'} code</VisuallyHidden.Root>
    </Spoiler.Trigger>
  );
});
