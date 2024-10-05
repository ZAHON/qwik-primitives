import type { ReadonlySignal, QRL, Signal } from '@builder.io/qwik';

export interface TabsContextValue {
  /**
   * The controlled value of the tab to activate.
   */
  tabsValue: ReadonlySignal<string>;

  /**
   * The function that allow change controlled value of the tab to activate.
   */
  setTabsValue$: QRL<(open: string) => void>;

  /**
   * The unique id of the tabs.
   */
  tabsId: string;

  /**
   * The reference to tabs list DOM element.
   */
  listRef: Signal<HTMLElement | undefined>;

  /**
   * When `true`, keyboard navigation will loop from last tab to first, and vice versa.
   */
  isLoop: Signal<boolean | undefined>;

  /**
   * The current tab stop id.
   */
  currentTabStopId: Signal<string | undefined>;

  isTabbingBackOut: Signal<boolean>;

  /**
   * The orientation of the component.
   */
  orientation: 'horizontal' | 'vertical';

  /**
   * When `"automatic"`, tabs are activated when receiving focus.
   * When `"manual"`, tabs are activated when clicked.
   */
  activationMode: 'automatic' | 'manual';
}
