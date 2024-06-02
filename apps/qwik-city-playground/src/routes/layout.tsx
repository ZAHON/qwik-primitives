import type { RequestHandler } from '@builder.io/qwik-city';
import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$, Link } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <main>
        <Slot />
      </main>
    </>
  );
});
