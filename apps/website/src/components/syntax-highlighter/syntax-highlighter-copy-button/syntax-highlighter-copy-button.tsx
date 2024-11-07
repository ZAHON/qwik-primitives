import type { SyntaxHighlighterCopyButtonProps } from './syntax-highlighter-copy-button.types';
import { component$ } from '@builder.io/qwik';
import { CopyButton } from '@/ui/copy-button';
import { VisuallyHidden } from '@/ui/visually-hidden';
import { syntaxHighlighterCopyButtonStyles } from './syntax-highlighter-copy-button.styles';

export const SyntaxHighlighterCopyButton = component$<SyntaxHighlighterCopyButtonProps>((props) => {
  const { value } = props;

  return (
    <CopyButton.Root value={value.trim()} class={syntaxHighlighterCopyButtonStyles()}>
      <CopyButton.Indicator>
        <CopyButton.IdleIcon />
        <CopyButton.CopiedIcon />
      </CopyButton.Indicator>
      <VisuallyHidden.Root>Copy code to clipboard</VisuallyHidden.Root>
    </CopyButton.Root>
  );
});
