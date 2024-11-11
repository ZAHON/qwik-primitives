import { cva } from 'class-variance-authority';

export const accordionItemIndicatorIconStyles = cva([
  'motion-safe:transition-transform',
  'motion-safe:ease-in-out',
  'motion-safe:duration-[350ms]',

  'group-data-[state=open]/accordion-item-indicator:-rotate-90',
]);
