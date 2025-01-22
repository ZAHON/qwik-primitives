# Spoiler

An interactive component that allow hide long sections of content under a spoiler.

## Features

- Full keyboard navigation.

- Can be or controlled uncontrolled.

- Support for responsive design.

## Import

```tsx
import { Spoiler } from 'qwik-primitives';
```

## Anatomy

```tsx
import { component$ } from '@builder.io/qwik';
import { Spoiler } from 'qwik-primitives';

const SpoilerDemo = component$(() => {
  return (
    <Spoiler.Root>
      <Spoiler.Trigger />
      <Spoiler.Panel>
        <Spoiler.Content />
      </Spoiler.Panel>
    </Spoiler.Root>
  );
});
```

## Usage

Spoiler component can be uncontrolled or controlled.

### Uncontrolled

```tsx
import { component$ } from '@builder.io/qwik';
import { Spoiler } from 'qwik-primitives';

const SpoilerDemo = component$(() => {
  return (
    <Spoiler.Root>
      <Spoiler.Trigger>Toggle content</Spoiler.Trigger>
      <Spoiler.Panel minHeight="60px">
        <Spoiler.Content>
          <p>
            Qwik Primitives is a UI toolkit for building accessible web apps and design systems with Qwik. It provides a
            set of low-level UI components and primitives which can be the foundation for your design system
            implementation.
          </p>
          <div style={{ height: '300px', backgroundColor: 'purple' }} />
        </Spoiler.Content>
      </Spoiler.Panel>
    </Spoiler.Root>
  );
});
```

### Controlled

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { Spoiler } from 'qwik-primitives';

const SpoilerDemo = component$(() => {
  const isOpen = useSignal(false);

  return (
    <Spoiler.Root open={isOpen} onOpenChange$={(open) => (isOpen.value = open)}>
      <Spoiler.Trigger>Toggle content</Spoiler.Trigger>
      <Spoiler.Panel minHeight="60px">
        <Spoiler.Content>
          <p>
            Qwik Primitives is a UI toolkit for building accessible web apps and design systems with Qwik. It provides a
            set of low-level UI components and primitives which can be the foundation for your design system
            implementation.
          </p>
          <div style={{ height: '300px', backgroundColor: 'purple' }} />
        </Spoiler.Content>
      </Spoiler.Panel>
    </Spoiler.Root>
  );
});
```

## API Reference

### Root

Contains all the parts of a spoiler. This component is based on the `div` element.

| Prop            | Type                           | Default | Description                                                                                                                                                                                                                             |
| --------------- | ------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`            | `FunctionComponent`            | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `defaultOpen`   | `boolean`                      | `-`     | The open state of the spoiler when it is initially rendered. Use when you do not need to control its open state.                                                                                                                        |
| `open`          | `Signal`                       | `-`     | The controlled open state of the spoiler.                                                                                                                                                                                               |
| `onOpenChange$` | `QRL<(open: boolean) => void>` | `-`     | Event handler called when the open state of the spoiler changes.                                                                                                                                                                        |
| `disabled`      | `boolean`                      | `-`     | When `true`, prevents the user from interacting with the spoiler.                                                                                                                                                                       |
| `style`         | `CSSProperties`                | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"spoiler"`           |
| `[data-part]`     | `"root"`              |
| `[data-state]`    | `"open" \| "closed"`  |
| `[data-disabled]` | Present when disabled |

### Trigger

The button that toggles the spoiler. This component is based on the `button` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"spoiler"`           |
| `[data-part]`     | `"trigger"`           |
| `[data-state]`    | `"open" \| "closed"`  |
| `[data-disabled]` | Present when disabled |

### Indicator

An optional decorative element that can indicate the state of the spoiler. This component is based on the `span` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                 |
| ----------------- | ---------------------- |
| `[data-scope]`    | `"spoiler"`            |
| `[data-part]`     | `"indicator"`          |
| `[data-state]`    | `"open" \| "closed"`   |
| `[data-disabled]` | Present when disabled. |

### Panel

The panel that expands/collapses. This component is based on the `div` element.

| Prop        | Type                | Default | Description                                                                                                                                                                                                                             |
| ----------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`        | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `minHeight` | `string`            | `0px`   | The minimum height of the panel when spolier is closed.                                                                                                                                                                                 |
| `onOpen$`   | `QRL<() => void>`   | `-`     | Event handler called when the panel is fully open. If you animate the size of the panel when it opens this event handler was call after animation end.                                                                                  |
| `onClose$`  | `QRL<() => void>`   | `-`     | Event handler called when the panel is fully close. If you animate the size of the panel when it closes this event handler was call after animation end.                                                                                |
| `style`     | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"spoiler"`           |
| `[data-part]`     | `"panel"`             |
| `[data-state]`    | `"open" \| "closed"`  |
| `[data-disabled]` | Present when disabled |

| CSS Variable                                 | Description                                            |
| -------------------------------------------- | ------------------------------------------------------ |
| `--qwik-primitives-spoiler-panel-min-height` | The minimum height of the panel when spolier is close. |
| `--qwik-primitives-spoiler-panel-max-height` | The maximum height of the panel when spolier is open.  |

### Content

The component that contains the spoiler content. Must be rendered inside `Spoiler.Panel`. This component is based on the `div` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"spoiler"`           |
| `[data-part]`     | `"content"`           |
| `[data-state]`    | `"open" \| "closed"`  |
| `[data-disabled]` | Present when disabled |

## Examples

### Animating panel height

Use the `--qwik-primitives-spoiler-panel-min-height` and `--qwik-primitives-spoiler-panel-max-height` CSS variables to animate the height of the panel when it opens/closes.

```tsx
// index.tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { Spoiler } from 'qwik-primitives';
import styles from './styles.css?inline';

const SpoilerDemo = component$(() => {
  useStyles$(styles);

  return (
    <Spoiler.Root>
      <Spoiler.Trigger>Toggle content</Spoiler.Trigger>
      <Spoiler.Panel minHeight="60px" class="spoiler-panel">
        <Spoiler.Content>
          <p>
            Qwik Primitives is a UI toolkit for building accessible web apps and design systems with Qwik. It provides a
            set of low-level UI components and primitives which can be the foundation for your design system
            implementation.
          </p>
          <div style={{ height: '300px', backgroundColor: 'purple' }} />
        </Spoiler.Content>
      </Spoiler.Panel>
    </Spoiler.Root>
  );
});
```

```css
/* styles.css */
.spoiler-panel[data-state='open'] {
  animation: spoiler-panel-down 300ms ease-out;
}

.spoiler-panel[data-state='closed'] {
  animation: spoiler-panel-up 300ms ease-out;
}

@keyframes spoiler-panel-down {
  0% {
    height: var(--qwik-primitives-spoiler-panel-min-height);
  }
  100% {
    height: var(--qwik-primitives-spoiler-panel-max-height);
  }
}

@keyframes spoiler-panel-up {
  0% {
    height: var(--qwik-primitives-spoiler-panel-max-height);
  }
  100% {
    height: var(--qwik-primitives-spoiler-panel-min-height);
  }
}
```

### Responsive min height of panel

You can also pass a CSS variable to the `minHeight` property. This will allow you to vary the minimum panel height when the spoiler is closed, depending on the screen width. This is especially useful when the content you want to be visible when the spoiler is closed has different heights depending on the screen width.

```tsx
// index.tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { Spoiler } from 'qwik-primitives';
import styles from './styles.css?inline';

const SpoilerDemo = component$(() => {
  useStyles$(styles);

  return (
    <Spoiler.Root>
      <Spoiler.Trigger>Toggle content</Spoiler.Trigger>
      <Spoiler.Panel minHeight="var(--spoiler-panel-min-height)" class="spoiler-panel">
        <Spoiler.Content>
          <p>
            Qwik Primitives is a UI toolkit for building accessible web apps and design systems with Qwik. It provides a
            set of low-level UI components and primitives which can be the foundation for your design system
            implementation.
          </p>
          <div style={{ height: '300px', backgroundColor: 'purple' }} />
        </Spoiler.Content>
      </Spoiler.Panel>
    </Spoiler.Root>
  );
});
```

```css
/* styles.css */
.spoiler-panel {
  --spoiler-panel-min-height: 60px;
}

@media screen and (min-width: 640px) {
  .spoiler-panel {
    --spoiler-panel-min-height: 120px;
  }
}
```

### Rotated icon when panel open

You can nest inside of a `Spoiler.Indicator` extra decorative elements, such as chevrons, and rotate it when the panel is open.

```tsx
// index.tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$, useStyles$ } from '@builder.io/qwik';
import { Spoiler } from 'qwik-primitives';
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

const SpoilerDemo = component$(() => {
  useStyles$(styles);

  return (
    <Spoiler.Root>
      <Spoiler.Trigger>
        Toggle content
        <Spoiler.Indicator class="spoiler-indicator">
          <ChevronLeftIcon class="spoiler-indicator-icon" />
        </Spoiler.Indicator>
      </Spoiler.Trigger>
      <Spoiler.Panel minHeight="60px">
        <Spoiler.Content>
          <p>
            Qwik Primitives is a UI toolkit for building accessible web apps and design systems with Qwik. It provides a
            set of low-level UI components and primitives which can be the foundation for your design system
            implementation.
          </p>
          <div style={{ height: '300px', backgroundColor: 'purple' }} />
        </Spoiler.Content>
      </Spoiler.Panel>
    </Spoiler.Root>
  );
});
```

```css
/* styles.css */
.spoiler-indicator[data-state='open'] > .spoiler-indicator-icon {
  transform: rotate(-90deg);
}
```

## Accessibility

### Differences to Collapsible component

At first glance, the `Spoiler` component does not differ much from the `Collapsible` component. The main difference you may notice is that the `Spoiler` component allows you to set a minimum panel height. However, in a situation where you want to hide the content and then show it your first choice should be the `Collapsible` component. This is related to accessibility in case the `Collapsible` component is closed its content is removed from the accessibility tree while when the `Spoiler` component is closed its content is still visible in the accessibility tree.

### Keyboard Interactions

| Key              | Description               |
| ---------------- | ------------------------- |
| <kbd>Space</kbd> | Opens/closes the spoiler. |
| <kbd>Enter</kbd> | Opens/closes the spoiler. |
