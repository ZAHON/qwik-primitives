import type { CardTitleProps } from './card-title.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { cardTitleStyles } from './card-title.styles';
import { CardContext } from '../card-context';

/**
 * An optional title of the card.
 * This component is based on the `p` element.
 */
export const CardTitle = component$<CardTitleProps>((props) => {
  const { as, size, highContrast = true, class: className, ...others } = props;

  const { size: cardSize } = useContext(CardContext);

  const Component = as || 'p';

  return (
    <Component class={twm(cardTitleStyles({ size: size ?? cardSize, highContrast }), className)} {...others}>
      <Slot />
    </Component>
  );
});
