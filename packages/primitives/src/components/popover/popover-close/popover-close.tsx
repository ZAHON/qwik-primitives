import type { PopoverCloseProps } from './popover-close.types';
import { component$, useContext, $, Slot } from '@builder.io/qwik';
import { topLayersStack } from '@/_internal/utilities/top-layers-stack';
import { PopoverContext } from '../popover-context';

/**
 * The button that closes an open popover.
 * This component is based on the `button` element.
 */
export const PopoverClose = component$<PopoverCloseProps>((props) => {
  const { as, disabled, onClick$, ...others } = props;

  const { setIsOpen$, topLayerId } = useContext(PopoverContext);

  const handleClick$ = $(() => {
    const isActiveTopLayer = topLayersStack.isActiveTopLayer(topLayerId);

    if (!disabled && isActiveTopLayer) setIsOpen$(false);
  });

  const Component = as || 'button';

  return (
    <Component
      type="button"
      disabled={disabled}
      data-qwik-primitives-popover-close=""
      data-scope="popover"
      data-part="close"
      data-disabled={disabled ? '' : undefined}
      onClick$={[onClick$, handleClick$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
