import type { CodePresentationCopyButtonProps } from './code-presentation-copy-button.types';
import { component$, useContext, useSignal, useTask$, $ } from '@builder.io/qwik';
import { CopyButton } from '@/ui/qwik/copy-button';
import { VisuallyHidden } from '@/ui/qwik/visually-hidden';
import { CodePresentationContext } from '../code-presentation-context';

export const CodePresentationCopyButton = component$<CodePresentationCopyButtonProps>((props) => {
  const { tsx, css } = props;

  const { tabsValue } = useContext(CodePresentationContext);

  const value = useSignal(tabsValue.value === 'index.tsx' ? tsx : tabsValue.value === 'styles.css' ? css : '');
  const copied = useSignal(false);

  useTask$(({ track }) => {
    track(() => tabsValue.value);

    if (tabsValue.value === 'index.tsx') value.value = tsx;
    if (tabsValue.value === 'styles.css') value.value = css;
  });

  const handleCopyStatusChange$ = $((status: 'idle' | 'copied' | 'error') => {
    if (status === 'idle') copied.value = false;
    if (status === 'copied') copied.value = true;
  });

  return (
    <CopyButton.Root size="1" value={value.value} onCopyStatusChange$={handleCopyStatusChange$}>
      <CopyButton.Indicator>
        <CopyButton.IndicatorIdleIcon />
        <CopyButton.IndicatorCopiedIcon />
      </CopyButton.Indicator>

      <VisuallyHidden.Root>{copied.value ? 'Code copied' : 'Copy code'} to clipboard</VisuallyHidden.Root>
    </CopyButton.Root>
  );
});
