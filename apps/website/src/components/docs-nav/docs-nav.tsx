import type { DocsNavProps } from './docs-nav.types';
import { component$ } from '@builder.io/qwik';
import { usePathname } from '@/hooks/use-pathname';
import { GithubLogoIcon } from '@/icons/github-logo-icon';
import { DocsNavGroup } from './docs-nav-group';
import { DocsNavHeading } from './docs-nav-heading';
import { DocsNavList } from './docs-nav-list';
import { DocsNavItem } from './docs-nav-item';
import { DocsNavLink } from './docs-nav-link';
import { docsNavStyles } from './docs-nav.styles';

export const DocsNav = component$<DocsNavProps>((props) => {
  const { variant } = props;

  const pathname = usePathname();

  return (
    <nav aria-label="Docs navigation" class={docsNavStyles()}>
      {variant === 'mobile' && (
        <DocsNavList aria-labelledby={undefined}>
          <DocsNavItem>
            <DocsNavLink href="/" variant={variant} active={pathname === '/'}>
              Home page
            </DocsNavLink>
          </DocsNavItem>
        </DocsNavList>
      )}

      {variant === 'mobile' && (
        <DocsNavGroup>
          <DocsNavHeading id="resources">Resources</DocsNavHeading>
          <DocsNavList aria-labelledby="resources">
            <DocsNavItem>
              <DocsNavLink
                href="https://github.com/ZAHON/qwik-primitives"
                variant={variant}
                active={false}
                external={true}
                openInNewTab={true}
              >
                <GithubLogoIcon height={15} width={15} /> GitHub
              </DocsNavLink>
            </DocsNavItem>
          </DocsNavList>
        </DocsNavGroup>
      )}
    </nav>
  );
});
