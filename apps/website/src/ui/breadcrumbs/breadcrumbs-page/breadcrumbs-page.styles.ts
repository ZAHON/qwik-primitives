import { cva } from 'class-variance-authority';

export const breadcrumbsPageStyles = cva(
  ['flex', 'items-center', 'gap-x-[calc(1em*0.3)]', 'line-clamp-1', 'cursor-default'],
  {
    variants: {
      color: {
        default: ['text-default-solid-12'],
        primary: ['text-primary-solid-12'],
      },
    },
  }
);
