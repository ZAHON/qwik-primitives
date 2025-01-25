import { cva } from 'class-variance-authority';

export const docsLayoutTableOfContentsAsideStyles = cva([
  'fixed',
  '-mt-10',
  'h-[calc(100%-3rem)]',
  'w-64',
  'py-10',
  'px-4',
  'flex',
  'items-start',
  'overflow-y-auto',
]);
