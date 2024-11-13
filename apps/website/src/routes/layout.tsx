import type { DocumentHead } from '@builder.io/qwik-city';
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

export const head: DocumentHead = ({ head, url }) => {
  const title = head.title;
  const description = head.meta.find((el) => el.name === 'description')?.content;

  if (!title) {
    throw Error('The site has no title!');
  }

  if (!description) {
    throw Error('The site does not have a description!');
  }

  return {
    title: url.pathname === '/' ? title : `${head.title} | Qwik Primitives`,
    meta: [
      // Facebook meta tags
      {
        name: 'og:url',
        content: url.href,
      },
      {
        name: 'og:type',
        content: 'website',
      },
      {
        name: 'og:title',
        content: url.pathname === '/' ? title : `${head.title} | Qwik Primitives`,
      },
      {
        name: 'og:description',
        content: description,
      },
      {
        name: 'og:image',
        content: `${url.origin}/socials/qwik-primitives.jpg`,
      },

      // Twitter meta tags
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:domain',
        content: url.host,
      },
      {
        name: 'twitter:url',
        content: url.href,
      },
      {
        name: 'twitter:title',
        content: url.pathname === '/' ? title : `${head.title} | Qwik Primitives`,
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'twitter:image',
        content: `${url.origin}/socials/qwik-primitives.jpg`,
      },
    ],
  };
};

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};
