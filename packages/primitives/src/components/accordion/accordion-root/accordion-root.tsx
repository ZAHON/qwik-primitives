import type { AccordionRootProps } from './accordion-root.types';
import type { AccordionRootSingleProps } from './accordion-root-single';
import type { AccordionRootMultipleProps } from './accordion-root-multiple';
import { AccordionRootSingle } from './accordion-root-single';
import { AccordionRootMultiple } from './accordion-root-multiple';
import { component$, Slot } from '@builder.io/qwik';

/**
 * Contains all the parts of an accordion.
 * This component is based on the `div` element.
 */
export const AccordionRoot = component$<AccordionRootProps>((props) => {
  const { type, ...others } = props;

  return (
    <>
      {type === 'single' && (
        <AccordionRootSingle {...(others as AccordionRootSingleProps)}>
          <Slot />
        </AccordionRootSingle>
      )}
      {type === 'multiple' && (
        <AccordionRootMultiple {...(others as AccordionRootMultipleProps)}>
          <Slot />
        </AccordionRootMultiple>
      )}
    </>
  );
});
