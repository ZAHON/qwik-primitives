import { cva } from 'class-variance-authority';

export const mobileMenuHeaderStyles = cva([
  'h-12',
  'px-3.5',
  'flex',
  'justify-between',
  'items-center',
  'shadow-[var(--mobile-menu-header-shadow-color)_0px_1px_0px_0px]',

  '[--mobile-menu-header-shadow-color:#00002D17]',
  'dark:[--mobile-menu-header-shadow-color:#D3EDF81D]',
]);
