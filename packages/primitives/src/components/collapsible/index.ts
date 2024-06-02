export type { CollapsibleRootProps } from './collapsible-root';
export type { CollapsibleTriggerProps } from './collapsible-trigger';
export type { CollapsiblePanelProps } from './collapsible-panel';
export type { CollapsibleContentProps } from './collapsible-content';

import { CollapsibleRoot } from './collapsible-root';
import { CollapsibleTrigger } from './collapsible-trigger';
import { CollapsiblePanel } from './collapsible-panel';
import { CollapsibleContent } from './collapsible-content';

export const Collapsible = {
  /**
   * Contains all the parts of a collapsible.
   * This component is based on the `div` element.
   */
  Root: CollapsibleRoot,

  /**
   * The button that toggles the collapsible.
   * This component is based on the `button` element.
   */
  Trigger: CollapsibleTrigger,

  /**
   * The panel that expands/collapses.
   * This component is based on the `div` element.
   */
  Panel: CollapsiblePanel,

  /**
   * The component that contains the collapsible content.
   * This component is based on the `div` element.
   */
  Content: CollapsibleContent,
};
