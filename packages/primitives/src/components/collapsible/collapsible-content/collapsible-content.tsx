import type { CollapsibleContentProps } from './collapsible-content.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { mergeStyles } from '@/utils';
import { CollapsibleContext } from '../collapsible-context';

/**
 * The component that contains the collapsible content.
 * Must be rendered inside `Collapsible.Panel`.
 * This component is based on the `div` element.
 */
export const CollapsibleContent = component$<CollapsibleContentProps>((props) => {
  const { as, style, ...others } = props;

  const { isOpen, isPanelHide, panelStatus, disabled } = useContext(CollapsibleContext);

  const Component = as || 'div';

  return (
    <Component
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={disabled ? '' : undefined}
      style={mergeStyles([{ overflow: panelStatus.value === 'open' ? undefined : 'hidden' }, style])}
      {...others}
    >
      {!isPanelHide.value && <Slot />}
    </Component>
  );
});
