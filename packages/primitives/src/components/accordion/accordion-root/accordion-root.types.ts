import type { PropsOf } from '@builder.io/qwik';
import type { AccordionRootSingleProps } from './accordion-root-single';
import type { AccordionRootMultipleProps } from './accordion-root-multiple';

interface AccordionRootCommonProps extends PropsOf<'div'> {
  /**
   * Determines whether one or multiple items can be opened at the same time.
   */
  type: 'single' | 'multiple';
}

export type AccordionRootProps = AccordionRootCommonProps &
  (({ type: 'single' } & AccordionRootSingleProps) | ({ type: 'multiple' } & AccordionRootMultipleProps));
