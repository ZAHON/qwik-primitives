import { component$ } from '@builder.io/qwik';
import { usePathname } from '@/hooks/use-pathname';
import { LogoHomeLink } from '@/components/logo-home-link';
import { VersionBadge } from '@/components/version-badge';
import { ThemeSwitch } from '@/components/theme-switch';
import { MobileMenu } from '@/components/mobile-menu';
import { Separator } from '@/ui/separator';
import { PageHeaderNav } from './page-header-nav';
import { PageHeaderDocumentationLink } from './page-header-documentation-link';
import { PageHeaderGithubLink } from './page-header-github-link';
import { PageHeaderScrollingScript } from './page-header-scrolling-script';
import { pageHeaderStyles } from './page-header.styles';

export const PageHeader = component$(() => {
  const pathname = usePathname();

  const variant = ['/'].includes(pathname) ? 'ghost' : 'default';

  return (
    <>
      {variant === 'ghost' && <div data-page-header-scroll-watcher />}
      <header data-page-header={variant === 'ghost' ? '' : undefined} class={pageHeaderStyles({ variant })}>
        <PageHeaderNav>
          <div class="flex items-center gap-x-3">
            <LogoHomeLink />
            <VersionBadge />
          </div>

          <div class="flex h-full items-center">
            <div class="flex gap-x-6">
              <PageHeaderDocumentationLink />
            </div>
            <Separator.Root orientation="vertical" class="ml-3 mr-1.5 hidden h-1/2 lg:block" />
            <div class="flex gap-x-1.5">
              <PageHeaderGithubLink />
              <ThemeSwitch />
              <MobileMenu />
            </div>
          </div>
        </PageHeaderNav>
      </header>
      {variant === 'ghost' && <PageHeaderScrollingScript />}
    </>
  );
});
