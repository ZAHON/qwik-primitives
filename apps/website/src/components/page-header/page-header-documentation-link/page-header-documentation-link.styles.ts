import { cva } from 'class-variance-authority';

export const pageHeaderDocumentationLinkStyles = cva(['select-none', 'hidden', 'lg:block'], {
  variants: {
    active: {
      true: ['underline', 'text-default-solid-12', 'decoration-default-alpha-6'],
    },
  },
});
