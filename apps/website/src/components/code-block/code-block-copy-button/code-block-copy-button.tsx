import type { CodeBlockCopyButtonProps } from './code-block-copy-button.types';
import { component$ } from '@builder.io/qwik';
import { CopyButton } from '@/ui/copy-button';
import { codeBlockCopyButtonStyles } from './code-block-copy-button.styles';

export const CodeBlockCopyButton = component$<CodeBlockCopyButtonProps>((props) => {
  const { value } = props;

  return (
    <CopyButton.Root value={value.trim()} class={codeBlockCopyButtonStyles()}>
      <CopyButton.Indicator>
        <CopyButton.IdleIcon />
        <CopyButton.CopiedIcon />
      </CopyButton.Indicator>
      <span class="sr-only">Copy code to clipboard</span>
    </CopyButton.Root>
  );
});
