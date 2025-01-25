import { cva } from 'class-variance-authority';

export const docsNavLinkStyles = cva([
  'flex',
  'justify-start',
  'py-2',
  'px-3',
  'text-2',

  'data-[active]:bg-default-alpha-3',
  'data-[active]:text-default-solid-12',
]);
