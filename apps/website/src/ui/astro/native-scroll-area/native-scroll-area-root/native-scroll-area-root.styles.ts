import { cva } from 'class-variance-authority';

export const nativeScrollAreaRootStyles = cva(
  [
    'h-full',
    'w-full',
    'overscroll-x-contain',
    'rounded-[calc(max(var(--radius-1),var(--radius-full))+0.25rem)]',

    '[&::-webkit-scrollbar-track]:border-4',
    '[&::-webkit-scrollbar-track]:border-solid',
    '[&::-webkit-scrollbar-track]:border-transparent',
    '[&::-webkit-scrollbar-track]:bg-clip-content',
    '[&::-webkit-scrollbar-track]:rounded-[inherit]',

    '[&::-webkit-scrollbar-thumb]:border-4',
    '[&::-webkit-scrollbar-thumb]:border-solid',
    '[&::-webkit-scrollbar-thumb]:border-transparent',
    '[&::-webkit-scrollbar-thumb]:bg-clip-content',
    '[&::-webkit-scrollbar-thumb]:rounded-[inherit]',

    'hover:[&::-webkit-scrollbar-thumb:vertical]:bg-default-9',
    'active:[&::-webkit-scrollbar-thumb:vertical]:bg-default-10',

    'hover:[&::-webkit-scrollbar-thumb:horizontal]:bg-default-9',
    'active:[&::-webkit-scrollbar-thumb:horizontal]:bg-default-10',

    '[&::-webkit-scrollbar-button]:size-0',
    '[&::-webkit-scrollbar-button]:bg-transparent',

    '[&::-webkit-scrollbar-corner]:size-0',
    '[&::-webkit-scrollbar-corner]:bg-transparent',

    '[@-moz-document_url-prefix()]:[scrollbar-width:auto]',
    '[@-moz-document_url-prefix()]:[scrollbar-color:hsl(var(--color-default-8))_hsl(var(--color-default-3))]',
  ],
  {
    variants: {
      size: {
        '1': ['[@media(pointer:fine)]:[&::-webkit-scrollbar]:size-3'],
        '2': ['[@media(pointer:fine)]:[&::-webkit-scrollbar]:size-4'],
        '3': ['[@media(pointer:fine)]:[&::-webkit-scrollbar]:size-5'],
      },
      type: {
        auto: ['[&::-webkit-scrollbar-track]:bg-default-3', '[&::-webkit-scrollbar-thumb]:bg-default-8'],
        hover: [
          '[&::-webkit-scrollbar-track]:bg-transparent',
          '[&::-webkit-scrollbar-thumb]:bg-transparent',

          'hover:[&::-webkit-scrollbar-track]:bg-default-3',
          '[&::-webkit-scrollbar-thumb]:hover:bg-default-8',

          'has-[*:hover]:[&::-webkit-scrollbar-track]:bg-default-3',
          'has-[*:hover]:[&::-webkit-scrollbar-thumb]:bg-default-8',
        ],
      },
      scrollbars: {
        vertical: ['overflow-y-auto', 'overflow-x-hidden'],
        horizontal: ['overflow-y-hidden', 'overflow-x-auto'],
        both: ['overflow-y-auto', 'overflow-x-auto'],
      },
    },
  }
);
