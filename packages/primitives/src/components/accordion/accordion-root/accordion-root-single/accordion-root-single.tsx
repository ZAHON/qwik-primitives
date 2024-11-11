import type { AccordionRootSingleProps } from './accordion-root-single.types';
import { component$, $, useContextProvider, Slot } from '@builder.io/qwik';
import { useControllableState } from '@/hooks/use-controllable-state';
import { useOnKeyDown } from '../hooks';
import { AccordionContext } from '../../accordion-context';

/**
 * Contains all the parts of an accordion.
 * This component is based on the `div` element.
 */
export const AccordionRootSingle = component$<AccordionRootSingleProps>((props) => {
  const { as, defaultValue, value, onValueChange$, collapsible, disabled, ...others } = props;

  const [accordionValue, setAccordionValue$] = useControllableState({
    uncontrolledValue: defaultValue,
    controlledSignal: value,
    finalValue: '',
    onChange$: onValueChange$,
  });

  useOnKeyDown();

  const handleItemOpen$ = $((itemValue: string) => {
    setAccordionValue$(itemValue);
  });

  const handleItemClose$ = $(() => {
    if (collapsible) setAccordionValue$('');
  });

  useContextProvider(AccordionContext, {
    accordionValue,
    accordionDisabled: disabled,
    onItemOpen$: handleItemOpen$,
    onItemClose$: handleItemClose$,
  });

  const Component = as || 'div';

  return (
    <Component
      data-qwik-primitives-accordion-root=""
      data-scope="accordion"
      data-part="root"
      data-disabled={disabled ? '' : undefined}
      {...others}
    >
      <Slot />
    </Component>
  );
});
