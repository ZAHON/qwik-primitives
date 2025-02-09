import { component$, useStyles$ } from '@builder.io/qwik';
import { Spinner } from 'qwik-primitives';
import styles from './styles.css?inline';

export const SpinnerDemo = component$(() => {
  useStyles$(styles);

  return (
    <Spinner.Root class="spinner-root">
      <span aria-hidden="true" class="spinner-leaf" />
      <span aria-hidden="true" class="spinner-leaf" />
      <span aria-hidden="true" class="spinner-leaf" />
      <span aria-hidden="true" class="spinner-leaf" />
      <span aria-hidden="true" class="spinner-leaf" />
      <span aria-hidden="true" class="spinner-leaf" />
      <span aria-hidden="true" class="spinner-leaf" />
      <span aria-hidden="true" class="spinner-leaf" />

      <Spinner.Label>Loading, plase wait</Spinner.Label>
    </Spinner.Root>
  );
});
