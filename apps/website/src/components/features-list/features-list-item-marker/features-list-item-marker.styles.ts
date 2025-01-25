import { cva } from 'class-variance-authority';

export const featuresListItemMarkerStyles = cva([
  'shrink-0',
  'size-6',
  'flex',
  'justify-center',
  'items-center',
  'bg-primary-alpha-3',
  'text-primary-alpha-11',
  'rounded-full',
  'pointer-events-none',
]);
