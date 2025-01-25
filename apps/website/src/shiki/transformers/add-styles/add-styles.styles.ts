import { cva } from 'class-variance-authority';

export const preStyles = cva([
  'py-3',
  'px-4',
  'text-[calc(0.85*var(--font-size-3))]',
  'leading-3',
  'tracking-[calc(-0.007em+var(--letter-spacing-3))]',
  'overflow-auto',
  'selection:bg-primary-selection',
  'focus:outline-none',
]);

export const codeStyles = cva(['min-w-full', 'w-fit', 'block']);
