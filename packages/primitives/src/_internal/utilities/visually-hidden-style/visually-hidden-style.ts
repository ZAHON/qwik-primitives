import type { CSSProperties } from '@builder.io/qwik';

/**
 * Style object that allow to hides content from the screen in an accessible way.
 */
export const visuallyHiddenStyle: CSSProperties = {
  position: 'absolute',
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  wordWrap: 'normal',
};
