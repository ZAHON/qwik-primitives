import { cva } from 'class-variance-authority';

export const codePresentationTabsPanelStyles = cva([
  'rounded-b-[var(--radius-4)]',

  'has-[pre:focus-visible]:outline',
  'has-[pre:focus-visible]:outline-2',
  'has-[pre:focus-visible]:-outline-offset-2',
  'has-[pre:focus-visible]:outline-primary-focus',
]);
