import type { UseSyntaxHighlighterLanguage as Language } from './use-syntax-highlighter.types';
import type { UseSyntaxHighlighterOptions as Options } from './use-syntax-highlighter.types';
import { useSignal, useTask$ } from '@builder.io/qwik';
import { codeToHtml } from 'shiki';
import { createCssVariablesTheme } from 'shiki/core';
import { addStyles, metaHighlight, metaWordHighlight } from './utilities';

const defaultOptions: Partial<Options> = {
  lines: undefined,
  words: undefined,
  preClass: undefined,
  codeClass: undefined,
  lineClass: undefined,
  highlighLineClass: undefined,
  highlighWordClass: undefined,
};

export const useSyntaxHighlighter = (code: string, language: Language, options?: Options) => {
  const { lines, words, preClass, codeClass, lineClass, highlighLineClass, highlighWordClass } = {
    ...defaultOptions,
    ...options,
  };

  const highlightedHTML = useSignal<string | undefined>(undefined);

  useTask$(async () => {
    const linesMeta = lines ? `{${lines.join(',')}}` : '';
    const wordsMeta = words ? `${words.map((word) => `/${word}/`).join(' ')}` : '';

    const theme = createCssVariablesTheme({
      name: 'css-variables',
      variablePrefix: '--syntax-highlighter-',
      variableDefaults: {},
      fontStyle: true,
    });

    const html = await codeToHtml(code.trim(), {
      lang: language,
      theme: theme,
      transformers: [
        addStyles({ preClass, codeClass, lineClass }),
        metaHighlight({ highlighLineClass }),
        metaWordHighlight({ highlighWordClass }),
      ],
      meta: { __raw: `${linesMeta} ${wordsMeta}` },
    });

    highlightedHTML.value = html;
  });

  return highlightedHTML.value;
};
