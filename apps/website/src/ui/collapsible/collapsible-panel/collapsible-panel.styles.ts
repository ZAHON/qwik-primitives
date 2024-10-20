import { cva } from 'class-variance-authority';

export const collapsiblePanelStyles = cva([
  'motion-safe:data-[state=open]:animate-collapsible-panel-down',
  'motion-safe:data-[state=closed]:animate-collapsible-panel-up',
]);
