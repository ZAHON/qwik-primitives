import { component$ } from '@builder.io/qwik';
import { usePathname } from '@/hooks/use-pathname';
import { Link } from '@/ui/link';
import { pageHeaderDocumentationLinkStyles } from './page-header-documentation-link.styles';

export const PageHeaderDocumentationLink = component$(() => {
  const pathname = usePathname();

  const active = pathname.includes('docs');

  return (
    <Link.Root
      href="/docs/overview/introduction"
      aria-current={active ? 'page' : undefined}
      size="2"
      color="default"
      class={pageHeaderDocumentationLinkStyles({ active })}
    >
      Documentation
    </Link.Root>
  );
});
