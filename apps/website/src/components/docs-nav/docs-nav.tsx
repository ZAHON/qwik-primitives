import type { DocsNavProps } from './docs-nav.types';
import { component$ } from '@builder.io/qwik';
import { usePathname } from '@/hooks/use-pathname';
import { components } from '@/data/components';
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
        <DocsNavGroup>
          <DocsNavHeading id="quick-nav">Quick nav</DocsNavHeading>
          <DocsNavList aria-labelledby="quick-nav">
            <DocsNavItem>
              <DocsNavLink href="/" active={pathname === '/'}>
                Home page
              </DocsNavLink>
            </DocsNavItem>
          </DocsNavList>
        </DocsNavGroup>
      )}

      <DocsNavGroup>
        <DocsNavHeading id="components">Components</DocsNavHeading>
        <DocsNavList aria-labelledby="components">
          {components.map(({ title, href }) => (
            <DocsNavItem key={title}>
              <DocsNavLink href={href} active={pathname === href}>
                {title}
              </DocsNavLink>
            </DocsNavItem>
          ))}
        </DocsNavList>
      </DocsNavGroup>

      {variant === 'mobile' && (
        <DocsNavGroup>
          <DocsNavHeading id="resources">Resources</DocsNavHeading>
          <DocsNavList aria-labelledby="resources">
            <DocsNavItem>
              <DocsNavLink
                href="https://github.com/ZAHON/qwik-primitives"
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
