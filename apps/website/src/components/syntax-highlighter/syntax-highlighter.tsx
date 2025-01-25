import type { SyntaxHighlighterProps } from './syntax-highlighter.types';
import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { codeToHtml } from 'shiki';
import { cssVariablesTheme } from '@/shiki/css-variables-theme';
import { removeLineClassAttribute } from '@/shiki/transformers/remove-line-class-attribute';
import { metaHighlight } from '@/shiki/transformers/meta-highlight';
import { metaWordHighlight } from '@/shiki/transformers/meta-word-highlight';
import { removePreTabindex } from '@/shiki/transformers/remove-pre-tabindex';
import { addStyles } from '@/shiki/transformers/add-styles';

export const SyntaxHighlighter = component$<SyntaxHighlighterProps>((props) => {
  const { code, language, lines, words, preClass } = props;

  const highlightedHTML = useSignal<string | undefined>(undefined);

  useTask$(async () => {
    const linesMeta = lines ? `{${lines.join(',')}}` : '';
    const wordsMeta = words ? `${words.map((word) => `/${word}/`).join(' ')}` : '';

    const html = await codeToHtml(code.trim(), {
      lang: language,
      theme: cssVariablesTheme,
      transformers: [
        removeLineClassAttribute(),
        metaHighlight(),
        metaWordHighlight(),
        removePreTabindex(),
        addStyles(preClass),
      ],
      meta: { __raw: `${linesMeta} ${wordsMeta}` },
    });

    highlightedHTML.value = html;
  });

  return <div dangerouslySetInnerHTML={highlightedHTML.value} />;
});
