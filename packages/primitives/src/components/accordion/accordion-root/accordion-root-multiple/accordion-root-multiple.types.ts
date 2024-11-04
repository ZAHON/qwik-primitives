import type { PropsOf, FunctionComponent, Signal, QRL, CSSProperties } from '@builder.io/qwik';

export interface AccordionRootMultipleProps extends PropsOf<'div'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The value of the item to expand when initially rendered.
   * Use when you do not need to control the state of the items.
   */
  defaultValue?: string[];

  /**
   * The controlled value of the item to expand.
   * Must be used in conjunction with `onValueChange$`.
   */
  value?: Signal<string[]>;

  /**
   * Event handler called when the expanded state of an item changes.
   */
  onValueChange$?: QRL<(value: string[]) => void>;

  /**
   * When `true`, prevents the user from interacting with the accordion and all its items.
   */
  disabled?: boolean;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
