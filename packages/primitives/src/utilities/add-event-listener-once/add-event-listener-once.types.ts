export interface AddEventListenerOnceParams<K extends keyof HTMLElementEventMap> {
  /**
   * The target element to attach the event listener to.
   */
  target: HTMLElement;

  /**
   * The name of the event to listen for.
   */
  eventName: K;

  /**
   * The event handler function to be executed when the event is triggered.
   */
  handler: (event: HTMLElementEventMap[K]) => void;

  /**
   * Specifies whether the event should be captured during the capturing phase.
   * @default false
   */
  capture?: boolean;
}
