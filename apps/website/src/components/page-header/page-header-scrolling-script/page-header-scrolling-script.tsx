import { component$ } from '@builder.io/qwik';

export const PageHeaderScrollingScript = component$(() => {
  const script = () => {
    const pageHeader = document.querySelector<HTMLElement>('[data-page-header]');
    const paheHeaderScrollWatcher = document.querySelector<HTMLDivElement>('[data-page-header-scroll-watcher]');

    if (pageHeader && paheHeaderScrollWatcher) {
      const navbarObserver = new IntersectionObserver(
        (entries) => {
          const isIntersecting = entries[0].isIntersecting;

          if (!isIntersecting) {
            pageHeader.setAttribute('data-scrolling-down', '');
          } else {
            pageHeader.removeAttribute('data-scrolling-down');
          }
        },
        { rootMargin: '30px 0px 0px 0px' }
      );

      navbarObserver.observe(paheHeaderScrollWatcher);
    }
  };

  return <script dangerouslySetInnerHTML={`(${script.toString()})()`} />;
});
