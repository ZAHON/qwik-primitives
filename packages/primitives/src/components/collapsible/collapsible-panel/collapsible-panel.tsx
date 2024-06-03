import type { CollapsiblePanelProps } from './collapsible-panel.types';
import { component$, useContext, useSignal, useTask$, Slot } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
import { composeRefs } from '@/utils/compose-refs';
import { addEventListenerOnce } from '@/utils/add-event-listener-once';
import { CollapsibleContext } from '../collapsible-context';

/**
 * The panel that expands/collapses.
 * This component is based on the `div` element.
 */
export const CollapsiblePanel = component$<CollapsiblePanelProps>((props) => {
  const { ref, style, ...others } = props;

  const { isOpen, isPanelHide, panelId, disabled } = useContext(CollapsibleContext);

  const panelRef = useSignal<HTMLDivElement>();
  // We just want to cancel the first firing of the animation when the component
  // is open after the first initial rendering. When a component is closed after initial
  // rendering, the animation will not execute because it has a `hidden` attribute with a value of `true`.
  const cancelFirstAnimation = useSignal(isOpen.value);
  const currentAnimationName = useSignal<string | undefined>(undefined);

  useTask$(({ track }) => {
    track(() => isOpen.value);

    if (isServer) return;

    if (panelRef.value && cancelFirstAnimation.value) {
      // During the first change of the open state in the browser, we
      // remove the animation cancellation. So the component will respond
      // to animations provided by the user.
      panelRef.value.style.setProperty('animationName', null);
      cancelFirstAnimation.value = false;
    }

    if (isOpen.value) {
      isPanelHide.value = false;

      setTimeout(() => {
        if (panelRef.value) {
          addEventListenerOnce({
            target: panelRef.value,
            eventName: 'animationstart',
            handler: (event) => (currentAnimationName.value = event.animationName),
          });
        }
      }, 0);

      return;
    }

    if (!isOpen.value) {
      setTimeout(() => {
        if (panelRef.value) {
          const { animationName } = getComputedStyle(panelRef.value);

          addEventListenerOnce({
            target: panelRef.value,
            eventName: 'animationstart',
            handler: (event) => (currentAnimationName.value = event.animationName),
          });

          if (animationName !== 'none') {
            addEventListenerOnce({
              target: panelRef.value,
              eventName: 'animationend',
              handler: () => {
                if (currentAnimationName.value === animationName) {
                  isPanelHide.value = true;
                }
              },
            });
          } else {
            isPanelHide.value = true;
          }
        } else {
          isPanelHide.value = true;
        }
      }, 0);
    }
  });

  return (
    <div
      ref={composeRefs(ref, panelRef)}
      id={panelId}
      hidden={isPanelHide.value}
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={disabled ? '' : undefined}
      style={{
        display: 'grid',
        gridTemplateRows: isOpen.value ? '1fr' : '0fr',
        animationName: cancelFirstAnimation.value ? 'none' : undefined,
        ...style,
      }}
      {...others}
    >
      <Slot />
    </div>
  );
});
