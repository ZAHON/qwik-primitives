import { cva } from 'class-variance-authority';

export const baseLayoutBodyStyles = cva([
  'min-h-dvh',
  'overflow-x-hidden',
  'text-foreground',
  'bg-background',

  'selection:bg-primary-selection',
]);
