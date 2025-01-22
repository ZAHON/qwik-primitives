import type { SpoilerPanelProps } from './spoiler-panel.types';
import { component$, useContext, useId, useSignal, useComputed$, useTask$, Slot } from '@builder.io/qwik';
import { isServer, isBrowser } from '@builder.io/qwik/build';
import { composeRefs } from '@/utilities';
import { SpoilerContext } from '../spoiler-context';

/**
 * The panel that expands/collapses.
 * This component is based on the `div` element.
 */
export const SpoilerPanel = component$<SpoilerPanelProps>((props) => {
  const { as, ref, id, minHeight = '0px', onOpen$, onClose$, style, ...others } = props;

  const { isOpen, isDisabled, panelId, contentHeight } = useContext(SpoilerContext);

  const autoId = useId();

  const panelRef = useSignal<HTMLElement | undefined>(undefined);
  const panelStatus = useSignal<'open' | 'closed' | 'indeterminate'>(isOpen.value ? 'open' : 'closed');
  const cancelFirstAnimation = useSignal(true);

  const panelHeight = useComputed$(() => {
    let height: string | undefined = undefined;

    if (isOpen.value) {
      if (contentHeight.value) {
        height = 'var(--qwik-primitives-spoiler-panel-max-height)';
      } else {
        height = undefined;
      }
    } else {
      height = 'var(--qwik-primitives-spoiler-panel-min-height)';
    }

    return height;
  });

  const panelMinHeightCSSVar = useComputed$(() => {
    return {
      '--qwik-primitives-spoiler-panel-min-height': minHeight,
    };
  });

  const panelMaxHeightCSSVar = useComputed$(() => {
    let maxHeight: string | undefined = undefined;

    if (contentHeight.value) {
      if (panelStatus.value !== 'closed') {
        maxHeight = `${contentHeight.value}px`;
      } else {
        maxHeight = undefined;
      }
    } else {
      maxHeight = undefined;
    }

    return {
      '--qwik-primitives-spoiler-panel-max-height': maxHeight,
    };
  });

  useTask$(({ track }) => {
    track(() => id);

    panelId.value = id || `qwik-primitives-spoiler-panel-${autoId}`;
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
    }
  });

  useTask$(({ track }) => {
    track(() => isOpen.value);

    if (isServer) return;

    if (isOpen.value) {
      setTimeout(() => {
        if (panelRef.value) {
          const { animationName } = getComputedStyle(panelRef.value);

          if (animationName !== 'none') {
            let currentAnimationName: string | undefined = undefined;

            panelRef.value.addEventListener(
              'animationstart',
              (event) => {
                currentAnimationName = event.animationName;
                panelStatus.value = 'indeterminate';
              },
              { once: true }
            );

            panelRef.value.addEventListener(
              'animationend',
              (event) => {
                if (currentAnimationName === event.animationName) {
                  panelStatus.value = 'open';
                  onOpen$?.();
                }
              },
              { once: true }
            );
          } else {
            panelStatus.value = 'open';
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
          panelStatus.value = 'closed';
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
                panelStatus.value = 'indeterminate';
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
      id={panelId.value}
      role="region"
      data-qwik-primitives-spoiler-panel=""
      data-scope="spoiler"
      data-part="panel"
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={isDisabled.value ? '' : undefined}
      style={{
        overflow: 'hidden',
        height: panelHeight.value,
        animationDuration: cancelFirstAnimation.value ? '0s' : undefined,
        ...panelMinHeightCSSVar.value,
        ...panelMaxHeightCSSVar.value,
        ...style,
      }}
      {...others}
    >
      <Slot />
    </Component>
  );
});
