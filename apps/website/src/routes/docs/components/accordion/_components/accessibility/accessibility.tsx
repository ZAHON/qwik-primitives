import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Text } from '@/ui/text';
import { Link } from '@/ui/link';
import { ExternalLinkIcon } from '@/icons/external-link-icon';
import { KeyboardInteractions } from './keyboard-interactions';

export const Accessibility = component$(() => {
  return (
    <>
      <HeadingLink.Root id="accessibility" level="2" size="6" class="mt-12 scroll-m-16">
        <HeadingLink.Content>
          Accessibility
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Text.Root class="mt-3">
        Adheres to the{' '}
        <Link.Root href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/" external={true} openInNewTab={true}>
          Accordion WAI-ARIA design pattern
          <ExternalLinkIcon height={14} width={14} />
        </Link.Root>
        .
      </Text.Root>

      <KeyboardInteractions />
    </>
  );
});
