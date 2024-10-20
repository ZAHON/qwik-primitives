import type { CardRootProps } from './card-root.types';
import { component$, useContextProvider, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { cardRootStyles } from './card-root.styles';
import { CardContext } from '../card-context';

/**
 * Container that groups related content and actions.
 * This component is based on the `div` element.
 */
export const CardRoot = component$<CardRootProps>((props) => {
  const { as, size = '1', class: className, ...others } = props;

  useContextProvider(CardContext, { size });

  const Component = as || 'div';

  return (
    <Component class={twm(cardRootStyles({ size }), className)} {...others}>
      <Slot />
    </Component>
  );
});
