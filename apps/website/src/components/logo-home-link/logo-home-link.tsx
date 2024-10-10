import { component$ } from '@builder.io/qwik';
import { usePathname } from '@/hooks/use-pathname';
import { Link } from '@/ui/link';
import { QwikLogoAndText } from '@/svgs/qwik-logo-and-text';

export const LogoHomeLink = component$(() => {
  const pathname = usePathname();

  return (
    <Link.Root href="/" aria-current={pathname === '/' ? 'page' : undefined} color="default" highContrast={true}>
      <QwikLogoAndText height={28} width={94} class="text-default-solid-12" />
      <span class="sr-only">Qwik Primitives home page</span>
    </Link.Root>
  );
});
