import type { AccordionItemIndicatorIconProps } from './accordion-item-indicator-icon.types';
import { component$, useContext } from '@builder.io/qwik';
import { ChevronLeftIcon } from '@/icons/chevron-left-icon';
import { twm } from '@/utilities/twm';
import { getIconSize } from './utilities';
import { accordionItemIndicatorIconStyles } from './accordion-item-indicator-icon.styles';
import { AccordionContext } from '../accordion-context';

/**
 * The default icon that indicates the state of the accordion item.
 * Must be nested inside `Accordion.ItemIndicator`.
 * This component is based on the `span` element.
 */
export const AccordionItemIndicatorIcon = component$<AccordionItemIndicatorIconProps>((props) => {
  const { class: className, ...others } = props;

  const { size } = useContext(AccordionContext);

  return (
    <ChevronLeftIcon
      height={getIconSize(size)}
      width={getIconSize(size)}
      class={twm(accordionItemIndicatorIconStyles(), className)}
      {...others}
    />
  );
});
