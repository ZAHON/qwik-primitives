import type { CollapsiblePanelProps } from './collapsible-panel.types';
import { component$, useContext, useSignal, useTask$, Slot } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
import { composeRefs } from '@/utils/compose-refs';
import { addEventListenerOnce } from '@/utils/add-event-listener-once';
import { CollapsibleContext } from '../collapsible-context';

export const CollapsiblePanel = component$<CollapsiblePanelProps>((props) => {
  const { ref, style, ...others } = props;

  const { isOpen, isContentHide, disabled, panelId } = useContext(CollapsibleContext);

  const panelRef = useSignal<HTMLDivElement>();
  const cancelFirstAnimation = useSignal(isOpen.value);
  const currentAnimationName = useSignal<string | undefined>(undefined);

  useTask$(({ track }) => {
    track(() => isOpen.value);

    if (isServer) return;

    if (panelRef.value && cancelFirstAnimation.value) {
      Object.assign(panelRef.value.style, {
        animationName: undefined,
      });

      cancelFirstAnimation.value = false;
    }

    if (isOpen.value) {
      isContentHide.value = false;

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
                  isContentHide.value = true;
                }
              },
            });
          } else {
            isContentHide.value = true;
          }
        } else {
          isContentHide.value = true;
        }
      }, 0);
    }
  });

  return (
    <div
      ref={composeRefs(ref, panelRef)}
      id={panelId}
      hidden={isContentHide.value}
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
