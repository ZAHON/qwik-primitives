import type { LabelRootProps } from './label-root.types';
import { component$, sync$, Slot } from '@builder.io/qwik';

/**
 * Contains the content for the label.
 * This component is based on the `label` element.
 */
export const LabelRoot = component$<LabelRootProps>((props) => {
  const { as, onMouseDown$, ...others } = props;

  const handleMouseDownSync$ = sync$((event: MouseEvent) => {
    // only prevent text selection if clicking inside the label itself
    const target = event.target as HTMLElement;
    if (target.closest('button, input, select, textarea')) return;

    // prevent text selection when double clicking label
    if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
  });

  const Component = as || 'label';

  return (
    <Component data-qwik-primitives-label-root="" onMouseDown$={[onMouseDown$, handleMouseDownSync$]} {...others}>
      <Slot />
    </Component>
  );
});
