import type { PopoverContentProps } from './popover-content.types';
import type { NoSerialize, CorrectedToggleEvent } from '@builder.io/qwik';
import type { Placement, Boundary } from '@floating-ui/dom';
import {
  component$,
  useContext,
  useId,
  useSignal,
  useTask$,
  $,
  sync$,
  useOnDocument,
  noSerialize,
  useContextProvider,
  Slot,
} from '@builder.io/qwik';
import { isServer, isBrowser } from '@builder.io/qwik/build';
import { computePosition, autoUpdate, offset, shift, limitShift, flip, size, arrow, hide } from '@floating-ui/dom';
import { useTopLayer } from '@/_internal/hooks';
import { useFocusTrap } from '@/hooks';
import { composeRefs } from '@/utilities';
import { transformOrigin, getSideAndAlignFromPlacement } from '../utilities';
import { PopoverContext } from '../popover-context';
import { PopoverContentContext } from '../popover-content-context';

/**
 * The component that pops out when the popover is open.
 * This component is based on the `div` element.
 */
export const PopoverContent = component$<PopoverContentProps>((props) => {
  const {
    as,
    ref,
    id,
    side = 'bottom',
    sideOffset = 0,
    align = 'center',
    alignOffset = 0,
    avoidCollisions = true,
    collisionBoundary = [],
    collisionPadding = 0,
    arrowPadding = 0,
    sticky = 'partial',
    hideWhenDetached = false,
    loop = true,
    autoFocus = true,
    restoreFocus = true,
    closeOnEscapeKeyDown = true,
    closeOnClickOutside = true,
    onEscapeKeyDown$,
    onClickOutside$,
    onOpen$,
    onClose$,
    style,
    ...others
  } = props;

  const { isOpen, setIsOpen$, triggerRef, anchorRef, contentId, titleId, descriptionId } = useContext(PopoverContext);

  const autoId = useId();

  const contentPositionerRef = useSignal<HTMLElement | undefined>(undefined);
  const contentRef = useSignal<HTMLElement | undefined>(undefined);
  const arrowPositionerRef = useSignal<HTMLElement | undefined>(undefined);
  const arrowWidth = useSignal<number | undefined>(undefined);
  const arrowHeight = useSignal<number | undefined>(undefined);
  const arrowX = useSignal<number | undefined>(undefined);
  const arrowY = useSignal<number | undefined>(undefined);
  const shouldHideArrow = useSignal<boolean | undefined>(undefined);
  const shouldMeasureArrow = useSignal<boolean | undefined>(undefined);
  const placedSide = useSignal<'top' | 'left' | 'bottom' | 'right' | undefined>(undefined);
  const placedAlign = useSignal<'start' | 'center' | 'end' | undefined>(undefined);
  const referenceHidden = useSignal<boolean | undefined>(undefined);
  const transform = useSignal<string | undefined>(undefined);
  const isPositioned = useSignal<boolean | undefined>(undefined);
  const cleanupAutoUpdate = useSignal<NoSerialize<(() => void) | undefined>>(undefined);

  const focusTrap = useFocusTrap(contentRef, { loop, autoFocus, restoreFocus: false });
  const topLayer = useTopLayer();

  useTask$(async () => undefined);

  useTask$(() => {
    contentId.value = id || `qwik-primitives-popover-content-${autoId}`;
  });

  useTask$(({ cleanup }) => {
    cleanup(() => {
      if (isBrowser) {
        contentId.value = undefined;

        if (cleanupAutoUpdate.value) cleanupAutoUpdate.value();
      }
    });
  });

  useTask$(({ track }) => {
    track(() => isOpen.value);

    if (isServer) return;

    if (isOpen.value) {
      if (contentPositionerRef.value && contentRef.value) {
        if (titleId.value) contentRef.value.setAttribute('aria-labelledby', titleId.value);
        if (descriptionId.value) contentRef.value.setAttribute('aria-describedby', descriptionId.value);

        focusTrap.active$();

        shouldMeasureArrow.value = true;
        contentPositionerRef.value.showPopover();

        topLayer.add$();
      }

      setTimeout(() => {
        if (contentRef.value) {
          const { animationName } = getComputedStyle(contentRef.value);

          if (animationName !== 'none') {
            let currentAnimationName: string | undefined = undefined;

            contentRef.value.addEventListener(
              'animationstart',
              (event) => (currentAnimationName = event.animationName),
              { once: true }
            );

            contentRef.value.addEventListener(
              'animationend',
              (event) => {
                if (currentAnimationName === event.animationName) onOpen$?.();
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
      const closeContent = () => {
        if (!isOpen.value && contentPositionerRef.value && contentRef.value) {
          contentRef.value.removeAttribute('aria-labelledby');
          contentRef.value.removeAttribute('aria-describedby');

          focusTrap.deactivate$();

          shouldMeasureArrow.value = false;
          contentPositionerRef.value.hidePopover();

          topLayer.remove$();

          setTimeout(() => {
            if (restoreFocus) {
              if (triggerRef.value && 'focus' in triggerRef.value) {
                triggerRef.value.focus();
              } else {
                document.body.focus();
              }
            }
          });

          onClose$?.();
        }
      };

      setTimeout(() => {
        if (contentRef.value) {
          const { animationName } = getComputedStyle(contentRef.value);

          if (animationName !== 'none') {
            let currentAnimationName: string | undefined = undefined;

            contentRef.value.addEventListener(
              'animationstart',
              (event) => (currentAnimationName = event.animationName),
              { once: true }
            );

            contentRef.value.addEventListener(
              'animationend',
              (event) => {
                if (currentAnimationName === event.animationName) {
                  closeContent();
                }
              },
              { once: true }
            );
          } else {
            closeContent();
          }
        }
      });
    }
  });

  const handleToggle$ = $((event: CorrectedToggleEvent) => {
    if (event.newState === 'open') {
      const desiredPlacement = (side + (align !== 'center' ? '-' + align : '')) as Placement;

      const desiredPadding =
        typeof collisionPadding === 'number'
          ? collisionPadding
          : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPadding };

      const boundary = Array.isArray(collisionBoundary)
        ? collisionBoundary.map((value) => value.value as HTMLElement | undefined)
        : [collisionBoundary.value];
      const hasExplicitBoundaries = boundary.length > 0;

      const detectOverflowOptions = {
        padding: desiredPadding,
        boundary: boundary.filter((value) => value !== undefined) as Boundary,
        // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
        altBoundary: hasExplicitBoundaries,
      };

      const updatePosition = async () => {
        const referenceElement = anchorRef.value || triggerRef.value;
        const floatingElement = contentPositionerRef.value;

        if (referenceElement && floatingElement) {
          const { x, y, placement, middlewareData } = await computePosition(referenceElement, floatingElement, {
            // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
            strategy: 'fixed',
            placement: desiredPlacement,
            middleware: [
              offset({ mainAxis: sideOffset + (arrowHeight.value ?? 0), alignmentAxis: alignOffset }),
              avoidCollisions &&
                shift({
                  mainAxis: true,
                  crossAxis: false,
                  limiter: sticky === 'partial' ? limitShift() : undefined,
                  ...detectOverflowOptions,
                }),
              avoidCollisions && flip({ ...detectOverflowOptions }),
              size({
                ...detectOverflowOptions,
                apply: ({ rects, availableWidth, availableHeight }) => {
                  const { width, height } = rects.reference;

                  if (contentRef.value) {
                    const suffix = '--qwik-primitives-popover';

                    contentRef.value.style.setProperty(`${suffix}-content-available-width`, `${availableWidth}px`);
                    contentRef.value.style.setProperty(`${suffix}-content-available-height`, `${availableHeight}px`);
                    contentRef.value.style.setProperty(`${suffix}-reference-width`, `${width}px`);
                    contentRef.value.style.setProperty(`${suffix}-reference-height`, `${height}px`);
                  }
                },
              }),
              arrowPositionerRef.value && arrow({ element: arrowPositionerRef.value, padding: arrowPadding }),
              transformOrigin({
                arrowWidth: arrowWidth.value ?? 0,
                arrowHeight: arrowHeight.value ?? 0,
              }),
              hideWhenDetached && hide({ strategy: 'referenceHidden', ...detectOverflowOptions }),
            ],
          });

          const { side, align } = getSideAndAlignFromPlacement(placement);

          if (contentRef.value) {
            contentRef.value.style.setProperty(
              '--qwik-primitives-popover-content-transform-origin',
              `${middlewareData.transformOrigin?.x} ${middlewareData.transformOrigin?.y}`
            );
          }

          arrowX.value = middlewareData.arrow?.x;
          arrowY.value = middlewareData.arrow?.y;
          shouldHideArrow.value = middlewareData.arrow?.centerOffset !== 0;

          placedSide.value = side;
          placedAlign.value = align;
          referenceHidden.value = middlewareData.hide?.referenceHidden;
          transform.value = `translate(${x}px, ${y}px)`;
          isPositioned.value = true;
        }
      };

      const startAutoUpdate = () => {
        const referenceElement = anchorRef.value || triggerRef.value;
        const floatingElement = contentPositionerRef.value;

        if (referenceElement && floatingElement) {
          return autoUpdate(referenceElement, floatingElement, updatePosition, {
            animationFrame: true,
          });
        }
      };

      cleanupAutoUpdate.value = noSerialize(startAutoUpdate());
    }

    if (event.newState === 'closed') {
      if (cleanupAutoUpdate.value) {
        cleanupAutoUpdate.value();
        isPositioned.value = false;
      }
    }
  });

  const handleKeyDownSync$ = sync$((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  const handleKeyDown$ = $(async (event: KeyboardEvent) => {
    const isActiveTopLayer = await topLayer.isActiveTopLayer$();

    if (isOpen.value && isActiveTopLayer && event.key === 'Escape') {
      if (closeOnEscapeKeyDown) {
        setIsOpen$(false);
      }

      onEscapeKeyDown$?.();
    }
  });

  const handleClick$ = $(async (event: PointerEvent) => {
    const isActiveTopLayer = await topLayer.isActiveTopLayer$();

    if (isOpen.value && isActiveTopLayer && contentPositionerRef.value) {
      const rect = contentPositionerRef.value.getBoundingClientRect();

      const isPointerDownOutside =
        rect.left > event.clientX ||
        rect.right < event.clientX ||
        rect.top > event.clientY ||
        rect.bottom < event.clientY;

      if (isPointerDownOutside && event.pointerId !== -1) {
        if (closeOnClickOutside) {
          setIsOpen$(false);
        }

        onClickOutside$?.();
      }
    }
  });

  useOnDocument('click', handleClick$);

  useContextProvider(PopoverContentContext, {
    arrowPositionerRef,
    arrowWidth,
    arrowHeight,
    arrowX,
    arrowY,
    shouldHideArrow,
    shouldMeasureArrow,
    placedSide,
  });

  const Component = as || 'div';

  return (
    <div
      ref={contentPositionerRef}
      popover="manual"
      // Floating UI interally calculates logical alignment based the `dir` attribute on
      // the reference/floating node, we must add this attribute here to ensure
      // this is calculated when portalled as well as inline.
      dir="ltr"
      data-qwik-primitives-popover-content-positioner=""
      data-scope="popover"
      data-part="content-positioner"
      onToggle$={handleToggle$}
      onKeyDown$={[handleKeyDownSync$, handleKeyDown$]}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        minWidth: 'max-content',
        color: 'unset',
        backgroundColor: 'unset',
        margin: 'unset',
        padding: 'unset',
        border: 'unset',
        overflow: 'unset',
        transform: isPositioned.value ? transform.value : 'translate(0, -200%)',
        // hide the content if using the hide middleware and should be hidden
        // set visibility to hidden and disable pointer events so the UI behaves
        // as if the PopperContent isn't there at all
        visibility: referenceHidden.value ? 'hidden' : undefined,
        pointerEvents: referenceHidden.value ? 'none' : undefined,
      }}
    >
      <Component
        ref={composeRefs([ref, contentRef])}
        role="dialog"
        id={contentId.value}
        tabIndex={-1}
        data-qwik-primitives-popover-content=""
        data-scope="popover"
        data-part="content"
        data-state={isOpen.value ? 'open' : 'closed'}
        data-side={isPositioned.value ? placedSide.value : undefined}
        data-align={isPositioned.value ? placedAlign.value : undefined}
        style={{
          // if the PopperContent hasn't been placed yet (not all measurements done)
          // we prevent animations so that users's animation don't kick in too early referring wrong sides
          animation: !isPositioned.value ? 'none' : undefined,
          ...style,
        }}
        {...others}
      >
        <Slot />
      </Component>
    </div>
  );
});
