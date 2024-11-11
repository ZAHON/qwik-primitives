import type { DocsNavHeadingProps } from './docs-nav-heading.types';
import { component$, Slot } from '@builder.io/qwik';
import { docsNavHeadingStyles } from './docs-nav-heading.styles';

export const DocsNavHeading = component$<DocsNavHeadingProps>((props) => {
  const { id } = props;

  return (
    <h5 id={`docs-nav-${id}`} class={docsNavHeadingStyles()}>
      <Slot />
    </h5>
  );
});
