import { cva } from 'class-variance-authority';

export const pageHeaderDocumentationLinkStyles = cva(['text-sm', 'select-none', 'hidden', 'lg:block'], {
  variants: {
    active: {
      true: ['underline', 'text-default-12', 'decoration-default-6', 'focus-visible:no-underline'],
    },
  },
});
