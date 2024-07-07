import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Alert } from '@/demos';

export default component$(() => {
  return (
    <>
      <h1>Alert</h1>
      <p>
        Display a brief, important message in a way that attracts the user's attention without interrupting the user's
        task.
      </p>

      <Alert.Example />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Alert example | Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content:
        "Display a brief, important message in a way that attracts the user's attention without interrupting the user's task.",
    },
  ],
};
