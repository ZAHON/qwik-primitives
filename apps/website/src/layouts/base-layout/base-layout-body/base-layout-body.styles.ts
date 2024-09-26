import { cva } from 'class-variance-authority';

export const baseLayoutBodyStyles = cva([
  'overflow-x-hidden',
  'bg-background',
  'text-foreground',

  'selection:bg-primary-selection',
]);
