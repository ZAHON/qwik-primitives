import type { AccordionRootProps } from './accordion-root.types';
import { component$, useContextProvider, Slot } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { accordionRootStyles } from './accordion-root.styles';
import { AccordionContext } from '../accordion-context';

/**
 * Contains all the parts of an accordion.
 * This component is based on the `div` element.
 */
export const AccordionRoot = component$<AccordionRootProps>((props) => {
  const { size = '2', class: className, ...others } = props;

  useContextProvider(AccordionContext, { size });

  return (
    <Accordion.Root class={twm(accordionRootStyles({ size }), className)} {...others}>
      <Slot />
    </Accordion.Root>
  );
});
