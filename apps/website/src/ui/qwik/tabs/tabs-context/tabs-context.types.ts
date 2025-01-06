export interface TabsContextValue {
  /**
   * The size of the tabs.
   */
  size: '1' | '2';

  /**
   * The color of the tabs.
   */
  color: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * Uses a higher contrast color for the tabs.
   */
  highContrast: boolean;
}
