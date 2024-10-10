import { cva } from 'class-variance-authority';

export const copyButtonCopiedIconStyles = cva([
  'absolute',
  'scale-0',
  'opacity-0',

  'motion-safe:transition',
  'motion-safe:duration-100',

  'group-data-[copied]/copy-button:scale-100',
  'group-data-[copied]/copy-button:opacity-100',
]);
