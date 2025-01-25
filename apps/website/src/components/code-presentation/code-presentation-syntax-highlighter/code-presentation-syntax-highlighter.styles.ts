import { cva } from 'class-variance-authority';

export const codePresentationSyntaxHighlighterPreStyles = cva([
  'max-h-[27.75rem]',

  'group-data-[state=closed]/code-presentation-spoiler:overflow-hidden',
  'group-data-[state=open]/code-presentation-spoiler:overflow-auto',
]);
