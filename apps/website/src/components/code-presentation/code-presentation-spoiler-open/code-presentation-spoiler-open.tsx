import { component$, useContext, useSignal, useTask$ } from '@builder.io/qwik';
import { Spoiler } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { buttonStyles } from '@/styles/shared/button';
import { codePresentationSpoilerOpenStyles } from './code-presentation-spoiler-open.styles';
import { CodePresentationContext } from '../code-presentation-context';

const buttonBaseStyles = buttonStyles({
  size: '1',
  shape: 'button',
  variant: 'soft',
  color: 'default',
  highContrast: false,
});

export const CodePresentationSpoilerOpen = component$(() => {
  const { isSpoilerOpen } = useContext(CodePresentationContext);

  const ref = useSignal<HTMLButtonElement | undefined>(undefined);

  useTask$(({ track }) => {
    track(() => isSpoilerOpen.value);

    if (ref.value) {
      if (isSpoilerOpen.value) {
        ref.value.disabled = true;
        ref.value.setAttribute('data-disabled', '');
      } else {
        ref.value.disabled = false;
        ref.value.removeAttribute('data-disabled');
      }
    }
  });

  return (
    <Spoiler.Trigger ref={ref} class={twm(buttonBaseStyles, codePresentationSpoilerOpenStyles())}>
      Expand code
    </Spoiler.Trigger>
  );
});
