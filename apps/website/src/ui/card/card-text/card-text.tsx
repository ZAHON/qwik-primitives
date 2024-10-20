import type { CardTextProps } from './card-text.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { cardTextStyles } from './card-text.styles';
import { CardContext } from '../card-context';

/**
 * An optional text of the card.
 * This component is based on the `p` element.
 */
export const CardText = component$<CardTextProps>((props) => {
  const { as, size, highContrast = true, class: className, ...others } = props;

  const { size: cardSize } = useContext(CardContext);

  const Component = as || 'p';

  return (
    <Component class={twm(cardTextStyles({ size: size ?? cardSize, highContrast }), className)} {...others}>
      <Slot />
    </Component>
  );
});
