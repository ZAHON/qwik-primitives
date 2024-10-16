import type { PropsOf, FunctionComponent, Signal, QRL, CSSProperties } from '@builder.io/qwik';

export interface TabsRootProps extends PropsOf<'div'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The value of the tab that should be active when initially rendered.
   * Use when you do not need to control the state of the tabs.
   */
  defaultValue?: string;

  /**
   * The controlled value of the tab to activate.
   * Should be used in conjunction with `onValueChange$`.
   */
  value?: Signal<string>;

  /**
   * Event handler called when the value changes.
   */
  onValueChange$?: QRL<(value: string) => void>;

  /**
   * When `"automatic"`, tabs are activated when receiving focus.
   * When `"manual"`, tabs are activated when clicked.
   * @default "automatic"
   */
  activationMode?: 'automatic' | 'manual';

  /**
   * The size of the tabs.
   * @default "2"
   */
  size?: '1' | '2';

  /**
   * The color of the tabs.
   * @default "primary"
   */
  color?: 'default' | 'primary';

  /**
   * Uses a higher contrast color for the tabs.
   */
  highContrast?: boolean;

  /**
   * The CSS class for the element.
   */
  class?: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
