# Toggle

A two-state button that can be either on or off.

## Features

- Full keyboard navigation.

- Can be controlled or uncontrolled.

## Import

```tsx
import { Toggle } from 'qwik-primitives';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Toggle } from 'qwik-primitives';

const ToggleDemo = component$(() => {
  return <Toggle.Root />;
});
```

## Usage

Toggle component can be uncontrolled or controlled.

### Uncontrolled

```tsx
import { component$ } from '@builder.io/qwik';
import { Toggle } from 'qwik-primitives';

const ToggleDemo = component$(() => {
  return (
    <Toggle.Root aria-label="Toggle italic">
      <svg
        aria-hidden="true"
        focusable="false"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.67494 3.50017C5.67494 3.25164 5.87641 3.05017 6.12494 3.05017H10.6249C10.8735 3.05017 11.0749 3.25164 11.0749 3.50017C11.0749 3.7487 10.8735 3.95017 10.6249 3.95017H9.00587L7.2309 11.05H8.87493C9.12345 11.05 9.32493 11.2515 9.32493 11.5C9.32493 11.7486 9.12345 11.95 8.87493 11.95H4.37493C4.1264 11.95 3.92493 11.7486 3.92493 11.5C3.92493 11.2515 4.1264 11.05 4.37493 11.05H5.99397L7.76894 3.95017H6.12494C5.87641 3.95017 5.67494 3.7487 5.67494 3.50017Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    </Toggle.Root>
  );
});
```

### Controlled

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { Toggle } from 'qwik-primitives';

const ToggleDemo = component$(() => {
  const isPressed = useSignal(false);

  return (
    <Toggle.Root
      pressed={isPressed}
      onPressedChange$={(pressed) => (isPressed.value = pressed)}
      aria-label="Toggle italic"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.67494 3.50017C5.67494 3.25164 5.87641 3.05017 6.12494 3.05017H10.6249C10.8735 3.05017 11.0749 3.25164 11.0749 3.50017C11.0749 3.7487 10.8735 3.95017 10.6249 3.95017H9.00587L7.2309 11.05H8.87493C9.12345 11.05 9.32493 11.2515 9.32493 11.5C9.32493 11.7486 9.12345 11.95 8.87493 11.95H4.37493C4.1264 11.95 3.92493 11.7486 3.92493 11.5C3.92493 11.2515 4.1264 11.05 4.37493 11.05H5.99397L7.76894 3.95017H6.12494C5.87641 3.95017 5.67494 3.7487 5.67494 3.50017Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    </Toggle.Root>
  );
});
```

## API Reference

### Root

Contains the content for the toggle. This component is based on the `button` element.

| Prop               | Type                              | Default | Description                                                                                                                                                                                                                             |
| ------------------ | --------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`               | `FunctionComponent`               | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `defaultPressed`   | `boolean`                         | `-`     | The pressed state of the toggle when it is initially rendered. Use when you do not need to control its pressed state.                                                                                                                   |
| `pressed`          | `Signal<boolean>`                 | `-`     | The controlled pressed state of the toggle. Must be used in conjunction with `onPressedChange$`.                                                                                                                                        |
| `onPressedChange$` | `QRL<(pressed: boolean) => void>` | `-`     | Event handler called when the pressed state of the toggle changes.                                                                                                                                                                      |
| `disabled`         | `boolean`                         | `-`     | When `true`, prevents the user from interacting with the toggle.                                                                                                                                                                        |
| `style`            | `CSSProperties`                   | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"toggle"`            |
| `[data-part]`     | `"root"`              |
| `[data-state]`    | `"on" \| "off"`       |
| `[data-disabled]` | Present when disabled |

## Accessibility

### Keyboard Interactions

| Key     | Description                       |
| ------- | --------------------------------- |
| `Space` | Activates/deactivates the toggle. |
| `Enter` | Activates/deactivates the toggle. |
