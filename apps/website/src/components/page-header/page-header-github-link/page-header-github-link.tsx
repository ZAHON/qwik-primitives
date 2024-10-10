import { component$ } from '@builder.io/qwik';
import { ButtonLink } from '@/ui/button-link';
import { GithubLogoIcon } from '@/icons/github-logo-icon';
import { pageHeaderGithubLinkStyles } from './page-header-github-link.styles';

export const PageHeaderGithubLink = component$(() => {
  return (
    <ButtonLink.Root
      href="https://github.com/ZAHON/qwik-primitives"
      external={true}
      openInNewTab={true}
      shape="icon"
      size="2"
      color="default"
      variant="ghost"
      class={pageHeaderGithubLinkStyles()}
    >
      <GithubLogoIcon height={16} width={16} />
      <span class="sr-only">View GitHub</span>
    </ButtonLink.Root>
  );
});
