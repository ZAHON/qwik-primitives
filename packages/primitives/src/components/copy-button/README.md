# Copy Button

Button that copies given text to clipboard.

## Features

- Configurable timeout for the copy operation, enhancing user control.

- Supports automatic reset after a copy operation for repeated use.

## Import

```tsx
import { CopyButton } from 'qwik-primitives';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { CopyButton } from 'qwik-primitives';

const CopyButtonDemo = component$(() => {
  return <CopyButton.Root />;
});
```

## Usage

```tsx
import { component$ } from '@builder.io/qwik';
import { CopyButton } from 'qwik-primitives';

const CopyButtonDemo = component$(() => {
  return <CopyButton.Root value="https://github.com/ZAHON/qwik-primitives">Copy to clipboard</CopyButton.Root>;
});
```

## API Reference

### Root

Contains all the parts of a copy button. This component is based on the `button` element.

| Prop                  | Type                                         | Default | Description                                                                                                                                                                                                                             |
| --------------------- | -------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`                  | `FunctionComponent`                          | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `value*`              | `string`                                     | `-`     | The value to be copied to the clipboard.                                                                                                                                                                                                |
| `timeout`             | `number`                                     | `3000`  | The timeout for the copy operation in milliseconds.                                                                                                                                                                                     |
| `onCopyStatusChange$` | `QRL<(status: 'copied' \| 'error') => void>` | `-`     | The function to be called when the value is copied to the clipboard.                                                                                                                                                                    |
| `disabled`            | `boolean`                                    | `-`     | When `true`, prevents the user from interacting with the copy button.                                                                                                                                                                   |
| `style`               | `CSSProperties`                              | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                            |
| ----------------- | --------------------------------- |
| `[data-scope]`    | `"copy-button"`                   |
| `[data-part]`     | `"root"`                          |
| `[data-copied]`   | Present when copied state is true |
| `[data-disabled]` | Present when disabled             |

## Accessibility

### Keyboard Interactions

| Key     | Description                |
| ------- | -------------------------- |
| `Space` | Copies value to clipboard. |
| `Enter` | Copies value to clipboard. |
