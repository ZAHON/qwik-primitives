import { cva } from 'class-variance-authority';

export const codePresentationSpoilerOverlayStyles = cva([
  'pointer-events-none',
  'flex',
  'justify-center',
  'items-end',
  'pb-3',
  'absolute',
  'z-10',
  'h-[9.5rem]',
  'inset-x-0',
  'bottom-0',
  'bg-gradient-to-t',
  'from-panel',
  'rounded-b-[var(--radius-4)]',

  'motion-safe:transition-opacity',
  'motion-safe:duration-[350ms]',

  'data-[state=open]:opacity-0',
  'data-[state=closed]:opacity-100',
]);
