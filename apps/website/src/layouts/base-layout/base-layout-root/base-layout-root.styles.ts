import { cva } from 'class-variance-authority';

export const baseLayoutRootStyles = cva([
  '[@media(pointer:fine)]:[&::-webkit-scrollbar]:size-3',

  '[&::-webkit-scrollbar-track]:bg-default-alpha-3',

  '[&::-webkit-scrollbar-thumb]:bg-default-alpha-8',
  '[&::-webkit-scrollbar-thumb]:border-px',
  '[&::-webkit-scrollbar-thumb]:border-solid',
  '[&::-webkit-scrollbar-thumb]:border-transparent',
  '[&::-webkit-scrollbar-thumb]:bg-clip-content',
  '[&::-webkit-scrollbar-thumb]:rounded-full',

  'hover:[&::-webkit-scrollbar-thumb:vertical]:bg-default-alpha-9',
  'active:[&::-webkit-scrollbar-thumb:vertical]:bg-default-alpha-10',

  '[&::-webkit-scrollbar-button]:size-0',
  '[&::-webkit-scrollbar-button]:bg-transparent',

  '[&::-webkit-scrollbar-corner]:size-0',
  '[&::-webkit-scrollbar-corner]:bg-transparent',

  '[@-moz-document_url-prefix()]:[scrollbar-width:auto]',
  '[@-moz-document_url-prefix()]:[scrollbar-color:var(--color-default-solid-8)_var(--color-default-solid-3)]',
]);
