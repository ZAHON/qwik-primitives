import { cva } from 'class-variance-authority';

export const spoilerPanelStyles = cva([
  'motion-safe:data-[state=open]:animate-spoiler-panel-down',
  'motion-safe:data-[state=closed]:animate-spoiler-panel-up',
]);
