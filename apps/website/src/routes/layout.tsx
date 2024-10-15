import type { RequestHandler } from '@builder.io/qwik-city';
import { component$, Slot } from '@builder.io/qwik';
import { PageHeader } from '@/components/page-header';

export default component$(() => {
  return (
    <>
      <PageHeader />
      <Slot />
    </>
  );
});

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};
