import type { AddEventListenerOnceParams } from './add-event-listener-once.types';

export const addEventListenerOnce = <K extends keyof HTMLElementEventMap>(params: AddEventListenerOnceParams<K>) => {
  const { target, eventName, handler, capture = false } = params;

  target.addEventListener(eventName, handler, { once: true, capture });
};
