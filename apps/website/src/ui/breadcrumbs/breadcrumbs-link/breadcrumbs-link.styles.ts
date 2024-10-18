import { cva } from 'class-variance-authority';

export const breadcrumbsLinkStyles = cva(
  [
    'flex',
    'items-center',
    'gap-x-[calc(1em*0.3)]',
    'cursor-pointer',
    'decoration-[min(0.125rem,max(0.0625rem,0.05em))]',
    'underline-offset-[calc(0.025em+0.125rem)]',
    'line-clamp-1',

    'hover:underline',

    'focus:outline-none',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:no-underline',
    'focus-visible:rounded-[calc(0.07em*var(--radius-factor))]',
  ],
  {
    variants: {
      color: {
        default: ['text-default-alpha-11', 'decoration-default-alpha-5', 'focus-visible:outline-primary-focus'],
        primary: ['text-primary-alpha-11', 'decoration-primary-alpha-5', 'focus-visible:outline-primary-focus'],
      },
    },
  }
);
