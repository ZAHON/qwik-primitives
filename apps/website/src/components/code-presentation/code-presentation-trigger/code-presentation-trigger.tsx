import { component$, useContext, $ } from '@builder.io/qwik';
import { Spoiler } from '@/ui/spoiler';
import { codePresentationTriggerStyles } from './code-presentation-trigger.styles';
import { CodePresentationContext } from '../code-presentation-context';

export const CodePresentationTrigger = component$(() => {
  const { isOpen } = useContext(CodePresentationContext);

  const handleClick$ = $((event: MouseEvent, currentTarget: HTMLButtonElement) => {
    if (!isOpen.value) {
      isOpen.value = true;
      currentTarget.disabled = true;
      currentTarget.setAttribute('data-disabled', '');
    }
  });

  return (
    <Spoiler.Trigger
      size="1"
      variant="soft"
      color="default"
      onClick$={handleClick$}
      class={codePresentationTriggerStyles()}
    >
      Expand code
    </Spoiler.Trigger>
  );
});
