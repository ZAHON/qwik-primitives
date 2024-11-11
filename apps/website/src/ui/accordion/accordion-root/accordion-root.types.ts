import type { PropsOf, FunctionComponent, Signal, QRL, CSSProperties } from '@builder.io/qwik';

interface AccordionRootSingleProps extends PropsOf<'div'> {
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
  defaultValue?: string;

  /**
   * The controlled value of the item to expand.
   * Must be used in conjunction with `onValueChange$`.
   */
  value?: Signal<string>;

  /**
   * Event handler called when the expanded state of an item changes.
   */
  onValueChange$?: QRL<(value: string) => void>;

  /**
   * When `true`, allows closing content when clicking trigger for an open item.
   */
  collapsible?: boolean;

  /**
   * The CSS class for the element.
   */
  class?: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}

interface AccordionRootMultipleProps extends PropsOf<'div'> {
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
   * The CSS class for the element.
   */
  class?: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}

interface AccordionRootCommonProps extends PropsOf<'div'> {
  /**
   * Determines whether one or multiple items can be opened at the same time.
   */
  type: 'single' | 'multiple';

  /**
   * The size of the accordion.
   * @default "2"
   */
  size?: '1' | '2' | '3';
}

export type AccordionRootProps = AccordionRootCommonProps &
  (({ type: 'single' } & AccordionRootSingleProps) | ({ type: 'multiple' } & AccordionRootMultipleProps));
