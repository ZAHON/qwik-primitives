import { cva } from 'class-variance-authority';

export const mobileMenuContentStyles = cva([
  'fixed',
  'top-0',
  'top-[calc(20%-0.125rem)]',
  'left-0.5',
  'translate-y-0',
  'm-0',
  'h-[80%]',
  'w-[calc(100dvw-0.25rem)]',
  'max-w-[calc(100dvw-0.25rem)]',
  'border-none',
  'bg-panel',
  'rounded-[var(--radius-4)]',
  'shadow-[0_0_0_1px_var(--color-default-alpha-6),0_12px_60px_var(--color-black-alpha-5),0_12px_32px_-16px_var(--color-black-alpha-7),0_0_0_1000vmax_var(--color-overlay)]',

  'backdrop:bg-transparent',

  'focus:outline-none',

  'motion-safe:data-[state=open]:animate-mobile-menu-content-show',
  'motion-safe:data-[state=closed]:animate-mobile-menu-content-hide',
]);
