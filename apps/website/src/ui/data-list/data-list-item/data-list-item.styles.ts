import { cva } from 'class-variance-authority';

export const dataListItemStyles = cva([''], {
  variants: {
    orientation: {
      horizontal: [
        'grid',
        'grid-cols-[inherit]',
        'supports-[grid-template-columns:subgrid]:grid-cols-subgrid',
        'gap-[inherit]',
        'col-span-2',
        'items-baseline',
        'mt-[-0.25em]',
        'mb-[-0.25em]',
        'first-of-type:mt-0',
        'last-of-type:mb-0',
      ],
      vertical: ['flex', 'flex-col', 'gap-y-1'],
    },
  },
});
