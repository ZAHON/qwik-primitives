import { cva } from 'class-variance-authority';

export const tabsListStyles = cva([
  'flex',
  'justify-start',
  'whitespace-nowrap',
  'border-b',
  'border-default-6',

  'focus:outline-none',
  'focus-visible:outline',
  'focus-visible:outline-2',
  'focus-visible:outline-primary-focus',
]);
