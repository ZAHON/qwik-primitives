import { cva } from 'class-variance-authority';

export const mobileMenuContentStyles = cva([
  'fixed',
  'top-0',
  'left-0',
  'm-0',
  'h-dvh',
  'w-dvw',
  'max-h-dvh',
  'max-w-[100dvw]',

  'bg-background',

  'backdrop:bg-transparent',

  'focus:outline-none',
]);
