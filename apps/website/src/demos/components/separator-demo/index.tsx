import { component$, useStyles$ } from '@builder.io/qwik';
import { Separator } from 'qwik-primitives';
import styles from './styles.css?inline';

export const SeparatorDemo = component$(() => {
  useStyles$(styles);

  return (
    <div class="wrapper">
      <h2 class="heading">Qwik Primitives</h2>
      <p class="text">An open-source UI component library.</p>
      <Separator.Root class="separator-root" />
      <div class="group">
        <span class="text">Blog</span>
        <Separator.Root orientation="vertical" class="separator-root" />
        <span class="text">Docs</span>
        <Separator.Root orientation="vertical" class="separator-root" />
        <span class="text">Source</span>
      </div>
    </div>
  );
});
