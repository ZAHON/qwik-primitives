import { cva } from 'class-variance-authority';

export const headingLinkIconStyles = cva([
  'text-default-alpha-11',
  'opacity-0',

  'group-hover/heading-link-content:opacity-100',
  'group-active/heading-link-content:opacity-100',
  'group-focus-visible/heading-link-content:opacity-100',
]);
