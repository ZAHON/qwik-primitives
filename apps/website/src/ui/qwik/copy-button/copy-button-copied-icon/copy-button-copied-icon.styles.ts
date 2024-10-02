import { cva } from 'class-variance-authority';

export const copyButtonCopiedIconStyles = cva([
  'absolute',
  'scale-0',
  'opacity-0',

  'motion-safe:transition',
  'motion-safe:duration-100',

  'group-data-[copied]:scale-100',
  'group-data-[copied]:opacity-100',
]);
