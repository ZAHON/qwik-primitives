import { component$ } from '@builder.io/qwik';
import { HeadingLink } from '@/ui/heading-link';
import { Root } from './root';
import { Trigger } from './trigger';
import { Content } from './content';
import { Cancel } from './cancel';
import { Action } from './action';
import { Title } from './title';
import { Description } from './description';

export const APIReference = component$(() => {
  return (
    <>
      <HeadingLink.Root id="api-reference" level="2" size="6" class="mt-12 scroll-m-16">
        <HeadingLink.Content>
          API Reference
          <HeadingLink.Icon />
        </HeadingLink.Content>
      </HeadingLink.Root>

      <Root />
      <Trigger />
      <Content />
      <Cancel />
      <Action />
      <Title />
      <Description />
    </>
  );
});
