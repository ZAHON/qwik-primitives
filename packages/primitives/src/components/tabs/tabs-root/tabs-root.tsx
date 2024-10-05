import type { TabsRootProps } from './tabs-root.types';
import { component$, useId, useSignal, useContextProvider, Slot } from '@builder.io/qwik';
import { useControllableState } from '@/hooks';
import { TabsContext } from '../tabs-context';

/**
 * Contains all the tabs component parts.
 * This component is based on the `div` element.
 */
export const TabsRoot = component$<TabsRootProps>((props) => {
  const {
    as,
    defaultValue,
    value,
    onValueChange$,
    orientation = 'horizontal',
    activationMode = 'automatic',
    ...others
  } = props;

  const [tabsValue, setTabsValue$] = useControllableState({
    uncontrolledValue: defaultValue,
    controlledSignal: value,
    finalValue: '',
    onChange$: onValueChange$,
  });

  const tabsId = useId();

  const listRef = useSignal<HTMLElement | undefined>(undefined);
  const isLoop = useSignal<boolean | undefined>(undefined);
  const currentTabStopId = useSignal<string | undefined>(undefined);
  const isTabbingBackOut = useSignal(false);

  useContextProvider(TabsContext, {
    tabsValue,
    setTabsValue$,
    tabsId,
    listRef,
    isLoop,
    currentTabStopId,
    isTabbingBackOut,
    orientation,
    activationMode,
  });

  const Component = as || 'div';

  return (
    <Component
      data-qwik-primitives-tabs-root=""
      data-scope="tabs"
      data-part="root"
      data-orientation={orientation}
      {...others}
    >
      <Slot />
    </Component>
  );
});
