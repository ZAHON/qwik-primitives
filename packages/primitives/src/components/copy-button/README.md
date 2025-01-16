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

| Prop                  | Type                                                   | Default | Description                                                                                                                                                                                                                             |
| --------------------- | ------------------------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`                  | `FunctionComponent`                                    | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `value*`              | `string`                                               | `-`     | The value to be copied to the clipboard.                                                                                                                                                                                                |
| `timeout`             | `number`                                               | `3000`  | The timeout for the copy operation in milliseconds.                                                                                                                                                                                     |
| `onCopyStatusChange$` | `QRL<(status: "idle" \| "copied" \| "error") => void>` | `-`     | The function to be called when the value is copied to the clipboard.                                                                                                                                                                    |
| `disabled`            | `boolean`                                              | `-`     | When `true`, prevents the user from interacting with the copy button.                                                                                                                                                                   |
| `style`               | `CSSProperties`                                        | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                             |
| ----------------- | ---------------------------------- |
| `[data-scope]`    | `"copy-button"`                    |
| `[data-part]`     | `"root"`                           |
| `[data-copied]`   | Present when copied state is true. |
| `[data-disabled]` | Present when disabled.             |

## Examples

### Add copy status indicator

It is good practice to show the user whether the value has been copied to the clipboard when the user clicks on the button. This could be to change the text or to show a different icon. You can use `onCopyStatusChange$` handler to access the copy status.

```tsx
import { component$, useSignal, $ } from '@builder.io/qwik';
import { CopyButton } from 'qwik-primitives';

const CopyButtonDemo = component$(() => {
  const copied = useSignal(false);

  const handleCopyStatusChange$ = $((status: 'idle' | 'copied' | 'error') => {
    if (status === 'idle') copied.value = false;
    if (status === 'copied') copied.value = true;
  });

  return (
    <CopyButton.Root value="https://github.com/ZAHON/qwik-primitives" onCopyStatusChange$={handleCopyStatusChange$}>
      {copied.value ? 'Copied' : 'Copy'} to clipboard
    </CopyButton.Root>
  );
});
```

## Accessibility

### Keyboard Interactions

| Key              | Description                |
| ---------------- | -------------------------- |
| <kbd>Space</kbd> | Copies value to clipboard. |
| <kbd>Enter</kbd> | Copies value to clipboard. |
