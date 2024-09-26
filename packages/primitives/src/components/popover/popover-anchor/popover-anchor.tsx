import type { PopoverAnchorProps } from './popover-anchor.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { composeRefs } from '@/utilities';
import { PopoverContext } from '../popover-context';

/**
 * An optional element to position the `Popover.Content` against.
 * If this part is not used, the content will position alongside the `Popover.Trigger`.
 * This component is based on the `div` element.
 */
export const PopoverAnchor = component$<PopoverAnchorProps>((props) => {
  const { as, ref, ...others } = props;

  const { anchorRef } = useContext(PopoverContext);

  const Component = as || 'div';

  return (
    <Component
      ref={composeRefs([ref, anchorRef])}
      data-qwik-primitives-popover-anchor=""
      data-scope="popover"
      data-part="anchor"
      {...others}
    >
      <Slot />
    </Component>
  );
});
