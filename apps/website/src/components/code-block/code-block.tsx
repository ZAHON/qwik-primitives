import type { CodeBlockProps } from './code-block.types';
import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { codeToHtml } from 'shiki';
import { createCssVariablesTheme } from 'shiki/core';
import { twm } from '@/utilities/twm';
import { CodeBlockCopyButton } from './code-block-copy-button';
import { addStyles, removeTabIndex, metaHighlight, metaWordHighlight } from './utilities';
import { codeBlockStyles } from './code-block.styles';

export const CodeBlock = component$<CodeBlockProps>((props) => {
  const { code, language, lines, words, withCopyButton = true, class: className } = props;

  const highlightedHTML = useSignal('');

  useTask$(async () => {
    const linesMeta = lines ? `{${lines.join(',')}}` : '';
    const wordsMeta = words ? `${words.map((word) => `/${word}/`).join(' ')}` : '';

    const theme = createCssVariablesTheme({
      name: 'css-variables',
      variablePrefix: '--code-block-',
      variableDefaults: {},
      fontStyle: true,
    });

    const html = await codeToHtml(code.trim(), {
      lang: language,
      theme: theme,
      transformers: [addStyles(), removeTabIndex(), metaHighlight(), metaWordHighlight()],
      meta: { __raw: `${linesMeta} ${wordsMeta}` },
    });

    highlightedHTML.value = html;
  });

  return (
    <div class={twm(codeBlockStyles(), className)}>
      <div dangerouslySetInnerHTML={highlightedHTML.value} />
      {withCopyButton && <CodeBlockCopyButton value={code.trim()} />}
    </div>
  );
});
