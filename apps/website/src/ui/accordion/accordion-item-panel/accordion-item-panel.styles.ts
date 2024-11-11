import { cva } from 'class-variance-authority';

export const accordionItemPanelStyles = cva([
  'motion-safe:data-[state=open]:animate-accordion-item-panel-down',
  'motion-safe:data-[state=closed]:animate-accordion-item-panel-up',
]);
