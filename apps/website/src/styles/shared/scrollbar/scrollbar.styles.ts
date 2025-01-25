import { cva } from 'class-variance-authority';

export const scrollbarStyles = cva(
  [
    'overscroll-x-contain',

    '[&::-webkit-scrollbar-track]:bg-default-alpha-3',
    '[&::-webkit-scrollbar-track]:border-4',
    '[&::-webkit-scrollbar-track]:border-solid',
    '[&::-webkit-scrollbar-track]:border-transparent',
    '[&::-webkit-scrollbar-track]:bg-clip-content',
    '[&::-webkit-scrollbar-track]:rounded-[calc(max(var(--radius-1),var(--radius-full))+0.25rem)]',

    '[&::-webkit-scrollbar-thumb]:bg-default-alpha-8',
    '[&::-webkit-scrollbar-thumb]:border-4',
    '[&::-webkit-scrollbar-thumb]:border-solid',
    '[&::-webkit-scrollbar-thumb]:border-transparent',
    '[&::-webkit-scrollbar-thumb]:bg-clip-content',
    '[&::-webkit-scrollbar-thumb]:rounded-[calc(max(var(--radius-1),var(--radius-full))+0.25rem)]',

    'hover:[&::-webkit-scrollbar-thumb:vertical]:bg-default-alpha-9',
    'active:[&::-webkit-scrollbar-thumb:vertical]:bg-default-alpha-10',

    'hover:[&::-webkit-scrollbar-thumb:horizontal]:bg-default-alpha-9',
    'active:[&::-webkit-scrollbar-thumb:horizontal]:bg-default-alpha-10',

    '[&::-webkit-scrollbar-button]:size-0',
    '[&::-webkit-scrollbar-button]:bg-transparent',

    '[&::-webkit-scrollbar-corner]:size-0',
    '[&::-webkit-scrollbar-corner]:bg-transparent',

    '[@-moz-document_url-prefix()]:[scrollbar-width:auto]',
    '[@-moz-document_url-prefix()]:[scrollbar-color:var(--color-default-solid-8)_var(--color-default-solid-3)]',
  ],
  {
    variants: {
      size: {
        '1': ['[@media(pointer:fine)]:[&::-webkit-scrollbar]:size-3'],
        '2': ['[@media(pointer:fine)]:[&::-webkit-scrollbar]:size-4'],
        '3': ['[@media(pointer:fine)]:[&::-webkit-scrollbar]:size-5'],
      },
    },
  }
);
