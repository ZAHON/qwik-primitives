import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { UnorderedList } from '@/ui/unordered-list';
import { Link } from '@/ui/link';
import { ExternalLinkIcon } from '@/icons/external-link-icon';

export const Features = component$(() => {
  return (
    <>
      <HeadingLink.Root id="features" level="2" size="6" class="mt-12 scroll-m-16">
        <HeadingLink.Content>
          Features
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <UnorderedList.Root class="mt-3">
        <UnorderedList.Item>Support for disabled breadcrumb links.</UnorderedList.Item>
        <UnorderedList.Item>
          Adheres to the{' '}
          <Link.Root href="https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/" external={true} openInNewTab={true}>
            Breadcrumb WAI-ARIA design pattern
            <ExternalLinkIcon height={14} width={14} />
          </Link.Root>
          .
        </UnorderedList.Item>
      </UnorderedList.Root>
    </>
  );
});
