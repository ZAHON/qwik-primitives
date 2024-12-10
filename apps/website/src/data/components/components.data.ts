import type { Components } from './components.types';

const baseHref = '/docs/components';

export const components: Components = [
  {
    title: 'Accordion',
    description: `A vertically stacked set of interactive headings that each reveal an associated section of content.`,
    href: `${baseHref}/accordion`,
  },
  {
    title: 'Alert',
    description: `Display a brief, important message in a way that attracts the user's attention without interrupting the user's task.`,
    href: `${baseHref}/alert`,
  },
  {
    title: 'Alert Dialog',
    description: `A modal dialog that interrupts the user with important content and expects a response.`,
    href: `${baseHref}/alert-dialog`,
  },
  {
    title: 'Avatar',
    description: `An image element with a fallback for representing the user.`,
    href: `${baseHref}/avatar`,
  },
  {
    title: 'Breadcrumbs',
    description: `Show hierarchy and navigational context for a user's location within an application.`,
    href: `${baseHref}/breadcrumbs`,
  },
  {
    title: 'Checkbox',
    description: `A control that allows the user to toggle between checked and not checked.`,
    href: `${baseHref}/checkbox`,
  },
  {
    title: 'Collapsible',
    description: `An interactive component which expands/collapses a panel.`,
    href: `${baseHref}/collapsible`,
  },
  {
    title: 'Copy Button',
    description: `Button that copies given text to clipboard.`,
    href: `${baseHref}/copy-button`,
  },
  {
    title: 'Dialog',
    description: `A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.`,
    href: `${baseHref}/dialog`,
  },
  {
    title: 'Heading',
    description: `Semantic heading element.`,
    href: `${baseHref}/heading`,
  },
  {
    title: 'Label',
    description: `Renders an accessible label associated with controls.`,
    href: `${baseHref}/label`,
  },
  {
    title: 'Link',
    description: `Semantic element for navigation between pages.`,
    href: `${baseHref}/link`,
  },
  {
    title: 'Popover',
    description: `Displays rich content in a portal, triggered by a button.`,
    href: `${baseHref}/popover`,
  },
  {
    title: 'Separator',
    description: `Visually or semantically separates content.`,
    href: `${baseHref}/separator`,
  },
  {
    title: 'Spinner',
    description: `Displays an animated loading indicator.`,
    href: `${baseHref}/spinner`,
  },
  {
    title: 'Spoiler',
    description: `An interactive component that allow hide long sections of content under a spoiler.`,
    href: `${baseHref}/spoiler`,
  },
  {
    title: 'Tabs',
    description: `A set of layered sections of content—known as tab panels—that are displayed one at a time.`,
    href: `${baseHref}/tabs`,
  },
  {
    title: 'Text Area',
    description: `Captures multi-line user input.`,
    href: `${baseHref}/text-area`,
  },
  {
    title: 'Toggle',
    description: `A two-state button that can be either on or off.`,
    href: `${baseHref}/toggle`,
  },
  {
    title: 'Visually Hidden',
    description: `Hides content from the screen in an accessible way.`,
    href: `${baseHref}/visually-hidden`,
  },
].sort((a, b) => a.title.localeCompare(b.title));
