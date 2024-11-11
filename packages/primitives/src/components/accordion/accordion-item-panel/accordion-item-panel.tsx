import type { AccordionItemPanelProps } from './accordion-item-panel.types';
import { component$, useContext, useId, useSignal, useTask$, Slot } from '@builder.io/qwik';
import { isServer, isBrowser } from '@builder.io/qwik/build';
import { composeRefs } from '@/utilities/compose-refs';
import { AccordionItemContext } from '../accordion-item-context';

/**
 * The panel that expands/collapses.
 * This component is based on the `div` element.
 */
export const AccordionItemPanel = component$<AccordionItemPanelProps>((props) => {
  const { as, ref, id, onOpen$, onClose$, style, ...others } = props;

  const { isOpen, isPanelHide, triggerId, panelId, isDisabled } = useContext(AccordionItemContext);

  const autoId = useId();

  const panelRef = useSignal<HTMLElement | undefined>();
  const cancelFirstAnimation = useSignal(isOpen.value);

  useTask$(async () => undefined);

  useTask$(({ track }) => {
    track(() => id);

    panelId.value = id || `qwik-primitives-accordion-item-panel-${autoId}`;
  });

  useTask$(({ cleanup }) => {
    cleanup(() => {
      if (isBrowser) panelId.value = undefined;
    });
  });

  useTask$(({ track }) => {
    track(() => isOpen.value);

    if (isServer) return;

    if (panelRef.value && cancelFirstAnimation.value) {
      cancelFirstAnimation.value = false;
      panelRef.value.style.removeProperty('animationDuration');
    }
  });

  useTask$(({ track }) => {
    track(() => isOpen.value);

    if (isServer) return;

    if (isOpen.value) {
      isPanelHide.value = false;

      setTimeout(() => {
        if (panelRef.value) {
          const { animationName } = getComputedStyle(panelRef.value);

          if (animationName !== 'none') {
            let currentAnimationName: string | undefined = undefined;

            panelRef.value.addEventListener(
              'animationstart',
              (event) => {
                currentAnimationName = event.animationName;
              },
              { once: true }
            );

            panelRef.value.addEventListener(
              'animationend',
              (event) => {
                if (currentAnimationName === event.animationName) {
                  onOpen$?.();
                }
              },
              { once: true }
            );
          } else {
            onOpen$?.();
          }
        }
      });
    }
  });

  useTask$(({ track }) => {
    track(() => isOpen.value);

    if (isServer) return;

    if (!isOpen.value) {
      const closePanel = () => {
        if (!isOpen.value) {
          isPanelHide.value = true;
          onClose$?.();
        }
      };

      setTimeout(() => {
        if (panelRef.value) {
          const { animationName } = getComputedStyle(panelRef.value);

          if (animationName !== 'none') {
            let currentAnimationName: string | undefined = undefined;

            panelRef.value.addEventListener(
              'animationstart',
              (event) => {
                currentAnimationName = event.animationName;
              },
              { once: true }
            );

            panelRef.value.addEventListener(
              'animationend',
              (event) => {
                if (currentAnimationName === event.animationName) {
                  closePanel();
                }
              },
              { once: true }
            );
          } else {
            closePanel();
          }
        } else {
          closePanel();
        }
      });
    }
  });

  const Component = as || 'div';

  return (
    <Component
      ref={composeRefs([ref, panelRef])}
      role="region"
      id={panelId.value}
      hidden={isPanelHide.value}
      aria-labelledby={triggerId.value}
      data-qwik-primitives-accordion-item-panel=""
      data-scope="accordion"
      data-part="item-panel"
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={isDisabled.value ? '' : undefined}
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
