import { cva } from 'class-variance-authority';

export const tabsContentStyles = cva([
  'focus:outline-none',
  'focus-visible:outline',
  'focus-visible:outline-2',
  'focus-visible:outline-primary-focus',
]);
