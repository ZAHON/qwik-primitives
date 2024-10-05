import { cva } from 'class-variance-authority';

export const popoverContentStyles = cva(
  [
    'overflow-hidden',
    'min-w-[var(--qwik-primitives-popover-reference-width)]',
    'max-w-[var(--qwik-primitives-popover-content-available-width)]',
    'w-[30rem]',
    'outline-none',
    'bg-panel',
    'shadow-5',
    'origin-[var(--qwik-primitives-popover-content-transform-origin)]',

    'motion-safe:data-[state=open]:data-[side=top]:animate-popper-content-side-top-show',
    'motion-safe:data-[state=closed]:data-[side=top]:animate-popper-content-side-top-hide',

    'motion-safe:data-[state=open]:data-[side=right]:animate-popper-content-side-right-show',
    'motion-safe:data-[state=closed]:data-[side=right]:animate-popper-content-side-right-hide',

    'motion-safe:data-[state=open]:data-[side=bottom]:animate-popper-content-side-bottom-show',
    'motion-safe:data-[state=closed]:data-[side=bottom]:animate-popper-content-side-bottom-hide',

    'motion-safe:data-[state=open]:data-[side=left]:animate-popper-content-side-left-show',
    'motion-safe:data-[state=closed]:data-[side=left]:animate-popper-content-side-left-hide',
  ],
  {
    variants: {
      size: {
        '1': ['rounded-[var(--radius-4)]'],
        '2': ['rounded-[var(--radius-4)]'],
        '3': ['rounded-[var(--radius-5)]'],
        '4': ['rounded-[var(--radius-5)]'],
      },
    },
  }
);
