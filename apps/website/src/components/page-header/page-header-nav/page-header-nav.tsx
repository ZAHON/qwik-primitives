import { component$, Slot } from '@builder.io/qwik';
import { pageHeaderNavStyles } from './page-header-nav.styles';

export const PageHeaderNav = component$(() => {
  return (
    <nav aria-label="Main navigation" class={pageHeaderNavStyles()}>
      <Slot />
    </nav>
  );
});
