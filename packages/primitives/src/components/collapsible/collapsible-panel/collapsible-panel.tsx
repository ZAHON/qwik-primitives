import type { CollapsiblePanelProps } from './collapsible-panel.types';
import { component$, useContext, useSignal, useTask$, Slot } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
import { addEventListenerOnce, composeRefs } from '@/utilities';
import { CollapsibleContext } from '../collapsible-context';

/**
 * The panel that expands/collapses.
 * This component is based on the `div` element.
 */
export const CollapsiblePanel = component$<CollapsiblePanelProps>((props) => {
  const { as, ref, onOpen$, onClose$, style, ...others } = props;

  const { isOpen, isPanelHide, panelStatus, panelId, disabled } = useContext(CollapsibleContext);

  const panelRef = useSignal<HTMLDivElement>();

  const cancelFirstAnimation = useSignal(isOpen.value);

  useTask$(({ track }) => {
    track(() => panelStatus.value);
    if (isServer) return;
    if (panelStatus.value === 'open' && onOpen$) onOpen$();
    if (panelStatus.value === 'closed' && onClose$) onClose$();
  });

  useTask$(async ({ track }) => {
    track(() => isOpen.value);

    if (isServer) return;

    if (panelRef.value && cancelFirstAnimation.value) {
      cancelFirstAnimation.value = false;
      panelRef.value.style.removeProperty('animationDuration');
    }

    if (isOpen.value) {
      isPanelHide.value = false;

      setTimeout(() => {
        if (panelRef.value) {
          const { animationName } = getComputedStyle(panelRef.value);

          if (animationName !== 'none') {
            let currentAnimationName: string | undefined = undefined;

            addEventListenerOnce({
              target: panelRef.value,
              eventName: 'animationstart',
              handler: (event) => {
                currentAnimationName = event.animationName;
                panelStatus.value = 'indeterminate';
              },
            });

            addEventListenerOnce({
              target: panelRef.value,
              eventName: 'animationend',
              handler: (event) => {
                if (currentAnimationName === event.animationName) {
                  panelStatus.value = 'open';
                }
              },
            });
          } else {
            panelStatus.value = 'open';
          }
        }
      }, 0);

      return;
    }

    if (!isOpen.value) {
      setTimeout(() => {
        if (panelRef.value) {
          const { animationName } = getComputedStyle(panelRef.value);

          if (animationName !== 'none') {
            let currentAnimationName: string | undefined = undefined;

            addEventListenerOnce({
              target: panelRef.value,
              eventName: 'animationstart',
              handler: (event) => {
                currentAnimationName = event.animationName;
                panelStatus.value = 'indeterminate';
              },
            });

            addEventListenerOnce({
              target: panelRef.value,
              eventName: 'animationend',
              handler: (event) => {
                if (panelRef.value) {
                  if (currentAnimationName === event.animationName) {
                    isPanelHide.value = true;
                    panelStatus.value = 'closed';
                  }
                }
              },
            });
          } else {
            isPanelHide.value = true;
            panelStatus.value = 'closed';
          }
        } else {
          isPanelHide.value = true;
          panelStatus.value = 'closed';
        }
      }, 1);
    }
  });

  const Component = as || 'div';

  return (
    <Component
      ref={composeRefs([ref, panelRef])}
      id={panelId}
      hidden={isPanelHide.value}
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={disabled ? '' : undefined}
      style={{
        display: 'grid',
        gridTemplateRows: isOpen.value ? '1fr' : '0fr',
        animationDuration: cancelFirstAnimation.value ? '0s' : undefined,
        ...style,
      }}
      {...others}
    >
      <Slot />
    </Component>
  );
});
