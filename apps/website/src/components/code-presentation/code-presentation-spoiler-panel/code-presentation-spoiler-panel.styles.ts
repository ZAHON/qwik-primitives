import { cva } from 'class-variance-authority';

export const codePresentationSpoilerPanelStyles = cva([
  'rounded-b-[var(--radius-4)]',

  'motion-safe:data-[state=open]:animate-code-presentation-spoiler-panel-down',
  'motion-safe:data-[state=closed]:animate-code-presentation-spoiler-panel-up',
]);
