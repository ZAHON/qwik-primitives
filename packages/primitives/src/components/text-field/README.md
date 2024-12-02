# Text Field

A text input that allow users to input custom text entries with a keyboard.

## Features

- Built with a native `input` element.

- Visual and ARIA labeling support.

- Required and invalid states exposed to assistive technology via ARIA.

- Support for description and error message help text linked to the input via ARIA.

- Syncs with form reset events.

- Can be controlled or uncontrolled.

## Import

```tsx
import { TextField } from 'qwik-primitives';
```

## Anatomy

Import the component and piece the parts together.

```tsx
import { component$ } from '@builder.io/qwik';
import { TextField } from 'qwik-primitives';

const TextFieldDemo = component$(() => {
  return (
    <TextField.Root>
      <TextField.Label />
      <TextField.Input />
      <TextField.Description />
      <TextField.ErrorMessage />
    </TextField.Root>
  );
});
```

## Usage

Text Field component can be uncontrolled or controlled.

### Uncontrolled

```tsx
import { component$ } from '@builder.io/qwik';
import { TextField } from 'qwik-primitives';

const TextFieldDemo = component$(() => {
  return (
    <TextField.Root>
      <TextField.Label>Username</TextField.Label>
      <TextField.Input />
    </TextField.Root>
  );
});
```

### Controlled

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { TextField } from 'qwik-primitives';

const TextFieldDemo = component$(() => {
  const textFieldValue = useSignal('');

  return (
    <TextField.Root value={textFieldValue} onValueChange$={(value) => (textFieldValue.value = value)}>
      <TextField.Label>Username</TextField.Label>
      <TextField.Input />
    </TextField.Root>
  );
});
```

## API Reference

### Root

Contains all the parts of a text field. This component is based on the `div` element.

| Prop             | Type                           | Default | Description                                                                                                                                                                                                                             |
| ---------------- | ------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`             | `FunctionComponent`            | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `defaultValue`   | `string`                       | `-`     | The default value of the text field when initially rendered. Use when you do not need to control its the value.                                                                                                                         |
| `value`          | `Signal<string>`               | `-`     | The controlled value of the text field. Must be used in conjunction with `onValueChange$`.                                                                                                                                              |
| `onValueChange$` | `QRL<(value: string) => void>` | `-`     | Event handler called when the value of the text field changes.                                                                                                                                                                          |
| `name`           | `string`                       | `-`     | The name of the text field. Submitted with its owning form as part of a name/value pair.                                                                                                                                                |
| `disabled`       | `boolean`                      | `-`     | When `true`, prevents the user from interacting with the text field.                                                                                                                                                                    |
| `invalid`        | `boolean`                      | `-`     | Whether the text field is invalid.                                                                                                                                                                                                      |
| `required`       | `boolean`                      | `-`     | When `true`, indicates that the user must fill the text field before the owning form can be submitted.                                                                                                                                  |
| `readOnly`       | `boolean`                      | `-`     | Whether the text field is read-only.                                                                                                                                                                                                    |
| `style`          | `CSSProperties`                | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                 |
| ----------------- | ---------------------- |
| `[data-scope]`    | `"text-field"`         |
| `[data-part]`     | `"root"`               |
| `[data-disabled]` | Present when disabled  |
| `[data-invalid]`  | Present when invalid   |
| `[data-required]` | Present when required  |
| `[data-readonly]` | Present when read only |

### Label

The label that gives the user information on the text field. This component is based on the `label` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                 |
| ----------------- | ---------------------- |
| `[data-scope]`    | `"text-field"`         |
| `[data-part]`     | `"label"`              |
| `[data-disabled]` | Present when disabled  |
| `[data-invalid]`  | Present when invalid   |
| `[data-required]` | Present when required  |
| `[data-readonly]` | Present when read only |

### Input

The native HTML input. This component is based on the `input` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                 |
| ----------------- | ---------------------- |
| `[data-scope]`    | `"text-field"`         |
| `[data-part]`     | `"input"`              |
| `[data-disabled]` | Present when disabled  |
| `[data-invalid]`  | Present when invalid   |
| `[data-required]` | Present when required  |
| `[data-readonly]` | Present when read only |

### Description

The description that gives the user more information on the text field. This component is based on the `span` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                 |
| ----------------- | ---------------------- |
| `[data-scope]`    | `"text-field"`         |
| `[data-part]`     | `"description"`        |
| `[data-disabled]` | Present when disabled  |
| `[data-invalid]`  | Present when invalid   |
| `[data-required]` | Present when required  |
| `[data-readonly]` | Present when read only |

### ErrorMessage

The error message that gives the user information about how to fix a validation error on the text field. By default, it will render only when the `invalid` prop is set to `true` on `TextField.Root` component, use the `forceMount` prop to always render the error message. This component is based on the `span` element.

| Prop         | Type                | Default | Description                                                                                                                                                                                                                             |
| ------------ | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`         | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `forceMount` | `boolean`           | `-`     | Used to force mounting when more control is needed.                                                                                                                                                                                     |
| `style`      | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                 |
| ----------------- | ---------------------- |
| `[data-scope]`    | `"text-field"`         |
| `[data-part]`     | `"error-message"`      |
| `[data-disabled]` | Present when disabled  |
| `[data-invalid]`  | Present when invalid   |
| `[data-required]` | Present when required  |
| `[data-readonly]` | Present when read only |

## Examples

### Description

The `TextField.Description` component can be used to associate additional help text with a text field.

```tsx
import { component$ } from '@builder.io/qwik';
import { TextField } from 'qwik-primitives';

const TextFieldDemo = component$(() => {
  return (
    <TextField.Root>
      <TextField.Label>Username</TextField.Label>
      <TextField.Input />
      <TextField.Description>This is your public display name.</TextField.Description>
    </TextField.Root>
  );
});
```

### Error message

The `TextField.ErrorMessage` component can be used to help the user fix a validation error. By default, it will render only when the `invalid` prop is set to `true` on `TextField.Root` component, use the `forceMount` prop to always render the error message.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { TextField } from 'qwik-primitives';

const TextFieldDemo = component$(() => {
  const username = useSignal('');

  return (
    <TextField.Root
      value={username}
      onValueChange$={(value) => (username.value = value)}
      invalid={username.value.length <= 1}
    >
      <TextField.Label>Username</TextField.Label>
      <TextField.Input />
      <TextField.ErrorMessage>Username must be at least 2 characters.</TextField.ErrorMessage>
    </TextField.Root>
  );
});
```

### HTML forms

The `TextField.Root` component `name` prop can be used for integration with HTML forms.

```tsx
import { component$, $ } from '@builder.io/qwik';
import { TextField } from 'qwik-primitives';

const TextFieldDemo = component$(() => {
  const handleSubmit$ = $((event: SubmitEvent) => {
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);
    const username = formData.get('username');

    if (username !== null) {
      alert(JSON.stringify({ username }, null, 2));
    }
  });

  return (
    <form preventdefault:submit={true} onSubmit$={handleSubmit$}>
      <TextField.Root name="username">
        <TextField.Label>Username</TextField.Label>
        <TextField.Input />
      </TextField.Root>

      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
    </form>
  );
});
```
