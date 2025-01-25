import { cva } from 'class-variance-authority';

export const articleHeaderLinksStyles = cva([
  'mt-6',
  'flex',
  'flex-col',
  'items-start',
  'gap-3',

  'sm:flex-row',
  'sm:gap-x-6',
]);
