# Collapsible

An interactive component which expands/collapses a panel.

## Features

- Full keyboard navigation.

- Can be or controlled uncontrolled.

- Adheres to the [Disclosure WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/).

## Import

```tsx
import { Collapsible } from 'qwik-primitives';
```

## Anatomy

Import the component and piece the parts together.

```tsx
import { component$ } from '@builder.io/qwik';
import { Collapsible } from 'qwik-primitives';

const CollapsibleDemo = component$(() => {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger />
      <Collapsible.Panel>
        <Collapsible.Content />
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
```

## Usage

Collapsible component can be uncontrolled or controlled.

### Uncontrolled

```tsx
import { component$ } from '@builder.io/qwik';
import { Collapsible } from 'qwik-primitives';

const CollapsibleDemo = component$(() => {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger>What is Qwik Primitives?</Collapsible.Trigger>
      <Collapsible.Panel>
        <Collapsible.Content>
          Qwik Primitives is a UI toolkit for building accessible web apps and design systems with Qwik. It provides a
          set of low-level UI components and primitives which can be the foundation for your design system
          implementation.
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
```

### Controlled

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { Collapsible } from 'qwik-primitives';

const CollapsibleDemo = component$(() => {
  const isOpen = useSignal(false);

  return (
    <Collapsible.Root open={isOpen} onOpenChange$={(open) => (isOpen.value = open)}>
      <Collapsible.Trigger>What is Qwik Primitives?</Collapsible.Trigger>
      <Collapsible.Panel>
        <Collapsible.Content>
          Qwik Primitives is a UI toolkit for building accessible web apps and design systems with Qwik. It provides a
          set of low-level UI components and primitives which can be the foundation for your design system
          implementation.
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
```

## API Reference

### Root

Contains all the parts of a collapsible. This component is based on the `div` element.

| Prop            | Type                           | Default | Description                                                                                                                                                                                                                             |
| --------------- | ------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`            | `FunctionComponent`            | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `defaultOpen`   | `boolean`                      | `-`     | The open state of the collapsible when it is initially rendered. Use when you do not need to control its open state.                                                                                                                    |
| `open`          | `Signal<boolean>`              | `-`     | The controlled open state of the collapsible Must be used in conjunction with `onOpenChange$`.                                                                                                                                          |
| `onOpenChange$` | `QRL<(open: boolean) => void>` | `-`     | Event handler called when the open state of the collapsible changes.                                                                                                                                                                    |
| `disabled`      | `boolean`                      | `-`     | When `true`, prevents the user from interacting with the collapsible.                                                                                                                                                                   |
| `style`         | `CSSProperties`                | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                 |
| ----------------- | ---------------------- |
| `[data-scope]`    | `"collapsible"`        |
| `[data-part]`     | `"root"`               |
| `[data-state]`    | `"open" \| "closed"`   |
| `[data-disabled]` | Present when disabled. |

### Trigger

The button that toggles the collapsible. This component is based on the `button` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                 |
| ----------------- | ---------------------- |
| `[data-scope]`    | `"collapsible"`        |
| `[data-part]`     | `"trigger"`            |
| `[data-state]`    | `"open" \| "closed"`   |
| `[data-disabled]` | Present when disabled. |

### Indicator

An optional decorative element that indicates the state of the collapsible. This component is based on the `span` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                 |
| ----------------- | ---------------------- |
| `[data-scope]`    | `"collapsible"`        |
| `[data-part]`     | `"indicator"`          |
| `[data-state]`    | `"open" \| "closed"`   |
| `[data-disabled]` | Present when disabled. |

### Panel

The panel that expands/collapses. This component is based on the `div` element.

| Prop       | Type                | Default | Description                                                                                                                                                                                                                             |
| ---------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`       | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `onOpen$`  | `QRL<() => void>`   | `-`     | Event handler called when the panel is fully open. If you animate the size of the panel when it opens this event handler was call after animation end.                                                                                  |
| `onClose$` | `QRL<() => void>`   | `-`     | Event handler called when the panel is fully close. If you animate the size of the panel when it closes this event handler was call after animation end.                                                                                |
| `style`    | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                 |
| ----------------- | ---------------------- |
| `[data-scope]`    | `"collapsible"`        |
| `[data-part]`     | `"panel"`              |
| `[data-state]`    | `"open" \| "closed"`   |
| `[data-disabled]` | Present when disabled. |

### Content

The component that contains the collapsible content. Must be nested inside `Collapsible.Panel`. This component is based on the `div` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                 |
| ----------------- | ---------------------- |
| `[data-scope]`    | `"collapsible"`        |
| `[data-part]`     | `"content"`            |
| `[data-state]`    | `"open" \| "closed"`   |
| `[data-disabled]` | Present when disabled. |

## Examples

### Animating panel size

Use the `grid-template-rows` CSS property with `0fr` or `1fr` value to animate the size of the panel when it opens/closes.

```tsx
// index.tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { Collapsible } from 'qwik-primitives';
import styles from './styles.css?inline';

const CollapsibleDemo = component$(() => {
  useStyles$(styles);

  return (
    <Collapsible.Root>
      <Collapsible.Trigger>What is Qwik Primitives?</Collapsible.Trigger>
      <Collapsible.Panel class="collapsible-panel">
        <Collapsible.Content>
          Qwik Primitives is a UI toolkit for building accessible web apps and design systems with Qwik. It provides a
          set of low-level UI components and primitives which can be the foundation for your design system
          implementation.
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
```

```css
/* styles.css */
.collapsible-panel[data-state='open'] {
  animation: collapsible-panel-down 300ms ease-out;
}

.collapsible-panel[data-state='closed'] {
  animation: collapsible-panel-up 300ms ease-out;
}

@keyframes collapsible-panel-down {
  0% {
    grid-template-rows: 0fr;
  }
  100% {
    grid-template-rows: 1fr;
  }
}

@keyframes collapsible-panel-up {
  0% {
    grid-template-rows: 1fr;
  }
  100% {
    grid-template-rows: 0fr;
  }
}
```

### Rotated icon when panel open

You can nest inside of a `Collapsible.Indicator` extra decorative elements, such as chevrons, and rotate it when the panel is open.

```tsx
// index.tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$, useStyles$ } from '@builder.io/qwik';
import { Collapsible } from 'qwik-primitives';
import styles from './styles.css?inline';

const ChevronLeftIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

const CollapsibleDemo = component$(() => {
  useStyles$(styles);

  return (
    <Collapsible.Root>
      <Collapsible.Trigger>
        What is Qwik Primitives?
        <Collapsible.Indicator class="collapsible-indicator">
          <ChevronLeftIcon class="collapsible-indicator-icon" />
        </Collapsible.Indicator>
      </Collapsible.Trigger>
      <Collapsible.Panel>
        <Collapsible.Content>
          Qwik Primitives is a UI toolkit for building accessible web apps and design systems with Qwik. It provides a
          set of low-level UI components and primitives which can be the foundation for your design system
          implementation.
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
```

```css
/* styles.css */
.collapsible-indicator[data-state='open'] > .collapsible-indicator-icon {
  transform: rotate(-90deg);
}
```

## Accessibility

Adheres to the [Disclosure WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/).

### Keyboard Interactions

| Key              | Description                   |
| ---------------- | ----------------------------- |
| <kbd>Space</kbd> | Opens/closes the collapsible. |
| <kbd>Enter</kbd> | Opens/closes the collapsible. |
