import type { PopoverArrowProps } from './popover-arrow.types';
import { component$, useContext, useComputed$, useTask$, Slot } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
import { PopoverContentContext } from '../popover-content-context';

/**
 * An optional arrow element to render alongside the popover.
 * This can be used to help visually link the anchor with the `Popover.Content`.
 * Must be rendered inside `Popover.Content`.
 * This component is based on the `svg` element.
 */
export const PopoverArrow = component$<PopoverArrowProps>((props) => {
  const { as, width = 10, height = 5, viewBox = '0 0 30 10', style, ...others } = props;

  const {
    arrowPositionerRef,
    arrowWidth,
    arrowHeight,
    arrowX,
    arrowY,
    shouldHideArrow,
    shouldMeasureArrow,
    placedSide,
  } = useContext(PopoverContentContext);

  const baseSide = useComputed$(() => {
    if (!placedSide.value) {
      return undefined;
    }

    const OPPOSITE_SIDE: Record<'top' | 'left' | 'bottom' | 'right', 'top' | 'left' | 'bottom' | 'right'> = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    };

    return OPPOSITE_SIDE[placedSide.value];
  });

  useTask$(async () => undefined);

  useTask$(() => {
    arrowWidth.value = width;
    arrowHeight.value = height;
  });

  useTask$(({ track, cleanup }) => {
    track(() => shouldMeasureArrow.value);

    if (isServer) return;

    if (shouldMeasureArrow.value && arrowPositionerRef.value) {
      arrowWidth.value = arrowPositionerRef.value.offsetWidth;
      arrowHeight.value = arrowPositionerRef.value.offsetHeight;

      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }

        if (!entries.length) {
          return;
        }

        const entry = entries[0];
        let width: number | undefined = undefined;
        let height: number | undefined = undefined;

        if ('borderBoxSize' in entry) {
          const borderSizeEntry = entry['borderBoxSize'];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;

          width = borderSize['inlineSize'];
          height = borderSize['blockSize'];
        } else {
          if (arrowPositionerRef.value) {
            width = arrowPositionerRef.value.offsetWidth;
            height = arrowPositionerRef.value.offsetHeight;
          }
        }

        arrowWidth.value = width;
        arrowHeight.value = height;
      });

      resizeObserver.observe(arrowPositionerRef.value, { box: 'border-box' });

      cleanup(() => {
        if (arrowPositionerRef.value) {
          resizeObserver.unobserve(arrowPositionerRef.value);
        }
      });
    } else {
      arrowWidth.value = undefined;
      arrowHeight.value = undefined;
    }
  });

  const Component = as || 'svg';

  return (
    <span
      ref={arrowPositionerRef}
      aria-hidden="true"
      data-qwik-primitives-popover-arrow-positioner=""
      data-scope="popover"
      data-part="arrow-positioner"
      style={{
        position: 'absolute',
        left: arrowX.value,
        top: arrowY.value,
        visibility: shouldHideArrow.value ? 'hidden' : undefined,
        ...(baseSide.value && { [baseSide.value]: 0 }),
        ...(placedSide.value && {
          transformOrigin: {
            top: '',
            right: '0 0',
            bottom: 'center 0',
            left: '100% 0',
          }[placedSide.value],
        }),
        ...(placedSide.value && {
          transform: {
            top: 'translateY(100%)',
            right: 'translateY(50%) rotate(90deg) translateX(-50%)',
            bottom: `rotate(180deg)`,
            left: 'translateY(50%) rotate(-90deg) translateX(50%)',
          }[placedSide.value],
        }),
      }}
    >
      <Component
        width={width}
        height={height}
        viewBox={viewBox}
        aria-hidden="true"
        focusable="false"
        preserveAspectRatio="none"
        data-qwik-primitives-popover-arrow=""
        data-scope="popover"
        data-part="arrow"
        style={{
          // ensures the element can be measured correctly (mostly for if SVG)
          display: 'block',
          ...style,
        }}
        {...others}
      >
        {!as && <polygon points="0,0 30,0 15,10" />}
        <Slot />
      </Component>
    </span>
  );
});
