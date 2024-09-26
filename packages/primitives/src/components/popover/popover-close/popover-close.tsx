import type { PopoverCloseProps } from './popover-close.types';
import { component$, useContext, useComputed$, $, Slot } from '@builder.io/qwik';
import { PopoverContext } from '../popover-context';

/**
 * The button that closes an open popover.
 * This component is based on the `button` element.
 */
export const PopoverClose = component$<PopoverCloseProps>((props) => {
  const { as, disabled, onClick$, ...others } = props;

  const { setIsOpen$ } = useContext(PopoverContext);

  const isDisabled = useComputed$(() => disabled);

  const handleClick$ = $(() => {
    if (!isDisabled.value) setIsOpen$(false);
  });

  const Component = as || 'button';

  return (
    <Component
      type="button"
      disabled={isDisabled.value}
      data-qwik-primitives-popover-close=""
      data-scope="popover"
      data-part="close"
      data-disabled={isDisabled.value ? '' : undefined}
      onClick$={[onClick$, handleClick$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
