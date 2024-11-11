import type { ReadonlySignal, QRL } from '@builder.io/qwik';

export interface AccordionContextValue {
  /**
   * The controlled value of the accordion.
   */
  accordionValue: ReadonlySignal<string | string[]>;

  /**
   * When `true`, prevents the user from interacting with the accordion and all its items.
   */
  accordionDisabled: boolean | undefined;

  /**
   * Event handler called when the accordion item open.
   */
  onItemOpen$: QRL<(itemValue: string) => void>;

  /**
   * Event handler called when the accordion item close.
   */
  onItemClose$: QRL<(itemValue: string) => void>;
}
