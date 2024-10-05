import { cva } from 'class-variance-authority';

export const tabsTriggerContentStyles = cva(
  [
    'flex',
    'justify-center',
    'items-center',
    'bg-transparent',

    'motion-safe:transition-colors',
    'motion-safe:duration-100',

    'group-focus-visible:outline',
    'group-focus-visible:outline-2',
    'group-focus-visible:-outline-offset-1',
    'group-focus-visible:outline-primary-focus',

    'group-enabled:group-hover:bg-default-3',
  ],
  {
    variants: {
      size: {
        '1': ['h-5', 'py-0.5', 'px-1', 'gap-x-2', 'rounded-[var(--radius-1)]'],
        '2': ['h-7', 'py-1', 'px-2', 'gap-x-2.5', 'rounded-[var(--radius-2)]'],
      },
      color: {
        default: [''],
        primary: ['group-enabled:group-hover:group-focus-visible:bg-primary-3'],
      },
    },
  }
);
