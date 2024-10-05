import { cva } from 'class-variance-authority';

export const tableRowStyles = cva([
  'align-top',
  'text-default-12',
  'border-b',
  'border-b-default-6',
  'last-of-type:border-none',
]);
