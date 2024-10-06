import { cva } from 'class-variance-authority';

export const copyButtonIdleIconStyles = cva([
  'absolute',
  'scale-100',
  'opacity-100',

  'motion-safe:transition',
  'motion-safe:duration-100',

  'group-data-[copied]/copy-button:scale-0',
  'group-data-[copied]/copy-button:scale-0',
]);
