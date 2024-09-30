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

  'motion-safe:data-[state=open]:animate-mobile-menu-content-show',
  'motion-safe:data-[state=closed]:animate-mobile-menu-content-hide',
]);
