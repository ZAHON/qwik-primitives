# Button

Trigger an action or event, such as submitting a form, opening a dialog, or performing operations like canceling or deleting.

## Features

- Built with a native `button` element.

- Supports a `pending` state to indicate ongoing actions and provide feedback to assistive technologies.

- Keyboard event support for `Space` and `Enter` keys.

## Import

```tsx
import { Button } from 'qwik-primitives';
```

## Anatomy

Import all parts and piece them together.

```tsx
import { component$ } from '@builder.io/qwik';
import { Button } from 'qwik-primitives';

const ButtonDemo = component$(() => {
  return (
    <Button.Root>
      <Button.Content />
      <Button.Fallback />
    </Button.Root>
  );
});
```

## Usage

```tsx
import { component$ } from '@builder.io/qwik';
import { Button } from 'qwik-primitives';

const ButtonDemo = component$(() => {
  return (
    <Button.Root>
      <Button.Content>Save data</Button.Content>
    </Button.Root>
  );
});
```

## API Reference

### Root

Contains all the parts of a button. This component is based on the `button` element.

| Prop       | Type                              | Default    | Description                                                                                                                                                                                                                             |
| ---------- | --------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`       | `FunctionComponent`               | `-`        | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `type`     | `"button" \| "submit" \| "reset"` | `"button"` | The behavior of the button when used in an HTML form.                                                                                                                                                                                   |
| `disabled` | `boolean`                         | `-`        | When `true`, prevents the user from interacting with the button.                                                                                                                                                                        |
| `pending`  | `boolean`                         | `-`        | Whether the button is in a pending state.                                                                                                                                                                                               |
| `style`    | `CSSProperties`                   | `-`        | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                                                  |
| ----------------- | ------------------------------------------------------- |
| `[data-scope]`    | `"button"`                                              |
| `[data-part]`     | `"root"`                                                |
| `[data-disabled]` | Present when the button is disabled                     |
| `[data-pending]`  | Present when the button is currently in a pending state |

### Content

Contains the content for the button. By default, it will render only when the button is not currently in a `pending` state, use the `forceMount` prop to always render the content. This component is based on the `span` element.

| Prop         | Type                | Default | Description                                                                                                                                                                                                                             |
| ------------ | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`         | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `forceMount` | `boolean`           | `-`     | Used to force mounting when more control is needed.                                                                                                                                                                                     |
| `style`      | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                                                  |
| ----------------- | ------------------------------------------------------- |
| `[data-scope]`    | `"button"`                                              |
| `[data-part]`     | `"content"`                                             |
| `[data-disabled]` | Present when the button is disabled                     |
| `[data-pending]`  | Present when the button is currently in a pending state |

### Fallback

An element that renders when the button is currently in a `pending` state. For more control use the `forceMount` prop to always render the component. This component is based on the `span` element.

| Prop         | Type                | Default | Description                                                                                                                                                                                                                             |
| ------------ | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`         | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `forceMount` | `boolean`           | `-`     | Used to force mounting when more control is needed.                                                                                                                                                                                     |
| `style`      | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                                                  |
| ----------------- | ------------------------------------------------------- |
| `[data-scope]`    | `"button"`                                              |
| `[data-part]`     | `"fallback"`                                            |
| `[data-disabled]` | Present when the button is disabled                     |
| `[data-pending]`  | Present when the button is currently in a pending state |

## Examples

### Pending

A button can be put into a pending state using the `pending` prop. This is useful when an action takes a long time to complete, and you want to provide feedback to the user that the action is in progress. The pending state announces the state change to assistive technologies.

```tsx
import { component$, useSignal, $ } from '@builder.io/qwik';
import { Button } from 'qwik-primitives';

const ButtonDemo = component$(() => {
  const isPending = useSignal(false);

  const handleClick$ = $(() => {
    if (!isPending.value) {
      isPending.value = true;

      setTimeout(() => {
        isPending.value = false;
      }, 5000);
    }
  });

  return (
    <Button.Root pending={isPending.value} onClick$={handleClick$}>
      <Button.Content>Save data</Button.Content>
      <Button.Fallback>Saving...</Button.Fallback>
    </Button.Root>
  );
});
```

## Accessibility

### Keyboard Interactions

| Key     | Description           |
| ------- | --------------------- |
| `Space` | Activates the button. |
| `Enter` | Activates the button. |
