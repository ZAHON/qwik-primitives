export const getFocusIntent = (event: KeyboardEvent, orientation: 'horizontal' | 'vertical') => {
  const key = event.key;

  if (orientation === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(key)) return undefined;
  if (orientation === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(key)) return undefined;

  // prettier-ignore
  const MAP_KEY_TO_FOCUS_INTENT: Record<string, 'first' | 'last' | 'prev' | 'next'> = {
		ArrowLeft: 'prev', ArrowUp: 'prev',
		ArrowRight: 'next', ArrowDown: 'next',
		PageUp: 'first', Home: 'first',
		PageDown: 'last', End: 'last',
	};

  return MAP_KEY_TO_FOCUS_INTENT[key];
};
