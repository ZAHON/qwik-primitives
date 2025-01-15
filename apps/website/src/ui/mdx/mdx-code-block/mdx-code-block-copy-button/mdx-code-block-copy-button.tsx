import type { MDXCodeBlockCopyButtonProps } from './mdx-code-block-copy-button.types';
import { component$, useSignal, $ } from '@builder.io/qwik';
import { CopyButton } from '@/ui/qwik/copy-button';
import { VisuallyHidden } from '@/ui/qwik/visually-hidden';
import { mdxCodeBlockCopyButtonStyles } from './mdx-code-block-copy-button.styles';

export const MDXCodeBlockCopyButton = component$<MDXCodeBlockCopyButtonProps>((props) => {
  const { value } = props;

  const copied = useSignal(false);

  const handleCopyStatusChange$ = $((status: 'idle' | 'copied' | 'error') => {
    if (status === 'idle') copied.value = false;
    if (status === 'copied') copied.value = true;
  });

  return (
    <CopyButton.Root value={value} onCopyStatusChange$={handleCopyStatusChange$} class={mdxCodeBlockCopyButtonStyles()}>
      <CopyButton.Indicator>
        <CopyButton.IndicatorIdleIcon />
        <CopyButton.IndicatorCopiedIcon />
      </CopyButton.Indicator>

      <VisuallyHidden.Root>{copied.value ? 'Code copied' : 'Copy code'} to clipboard</VisuallyHidden.Root>
    </CopyButton.Root>
  );
});
