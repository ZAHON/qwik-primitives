import type { ComponentPropsPopoverProps } from './component-props-popover.types';
import { component$, Slot } from '@builder.io/qwik';
import { Popover } from '@/ui/popover';
import { VisuallyHidden } from '@/ui/visually-hidden';
import { InfoCircledIcon } from '@/icons/info-circled-icon';

export const ComponentPropsPopover = component$<ComponentPropsPopoverProps>((props) => {
  const { label, title } = props;

  return (
    <Popover.Root>
      <Popover.Trigger shape="icon" size="1" variant="ghost" color="default">
        <InfoCircledIcon height={14} width={14} class="pointer-events-none" />
        <VisuallyHidden.Root>{label}</VisuallyHidden.Root>
      </Popover.Trigger>
      <Popover.Content align="center" class="w-fit max-w-[22.5rem]">
        <Popover.Section class="w-full overflow-x-auto">
          <Popover.Header class="sr-only">
            <Popover.Title visuallyHidden={true}>{title}</Popover.Title>
          </Popover.Header>
          <Popover.Body>
            <Slot />
          </Popover.Body>
        </Popover.Section>
      </Popover.Content>
    </Popover.Root>
  );
});
