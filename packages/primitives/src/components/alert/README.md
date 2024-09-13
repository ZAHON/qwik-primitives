# Alert

Display a brief, important message in a way that attracts the user's attention without interrupting the user's task.

## Features

- Adheres to the [Alert WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/).

## Import

```tsx
import { Alert } from 'qwik-primitives';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Alert } from 'qwik-primitives';

const AlertDemo = component$(() => {
  return <Alert.Root />;
});
```

## Usage

```tsx
import { component$ } from '@builder.io/qwik';
import { Alert } from 'qwik-primitives';

const AlertDemo = component$(() => {
  return <Alert.Root>Access denied. Please contact the network administrator to view this page.</Alert.Root>;
});
```

## API Reference

### Root

Contains the content for the alert. This component is based on the `div` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute | Values    |
| -------------- | --------- |
| `[data-scope]` | `"alert"` |
| `[data-part]`  | `"root"`  |

## Accessibility

Adheres to the [Alert WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/).
