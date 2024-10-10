import { component$, Slot } from '@builder.io/qwik';
import { docsNavGroupStyles } from './docs-nav-group.styles';

export const DocsNavGroup = component$(() => {
  return (
    <div role="group" class={docsNavGroupStyles()}>
      <Slot />
    </div>
  );
});
