# Text Area

Captures multi-line user input.

## Features

- Built with a native `textarea` element.

- Visual and ARIA labeling support.

- Required and invalid states exposed to assistive technology via ARIA.

- Support for description and error message help text linked to the input via ARIA.

- Syncs with form reset events.

- Can be controlled or uncontrolled.

## Import

```tsx
import { TextArea } from 'qwik-primitives';
```

## Anatomy

Import the component and piece the parts together.

```tsx
import { component$ } from '@builder.io/qwik';
import { TextArea } from 'qwik-primitives';

const TextAreaDemo = component$(() => {
  return (
    <TextArea.Root>
      <TextArea.Label />
      <TextArea.Input />
      <TextArea.Description />
      <TextArea.ErrorMessage />
    </TextArea.Root>
  );
});
```

## Usage

Text Area component can be uncontrolled or controlled.

### Uncontrolled

```tsx
import { component$ } from '@builder.io/qwik';
import { TextArea } from 'qwik-primitives';

const TextAreaDemo = component$(() => {
  return (
    <TextArea.Root>
      <TextArea.Label>Your message</TextArea.Label>
      <TextArea.Input placeholder="Type your message here." />
    </TextArea.Root>
  );
});
```

### Controlled

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { TextArea } from 'qwik-primitives';

const TextAreaDemo = component$(() => {
  const textAreaValue = useSignal('');

  return (
    <TextArea.Root value={textAreaValue} onValueChange$={(value) => (textAreaValue.value = value)}>
      <TextArea.Label>Your message</TextArea.Label>
      <TextArea.Input placeholder="Type your message here." />
    </TextArea.Root>
  );
});
```

## API Reference

### Root

Contains all the parts of a text area. This component is based on the `div` element.

| Prop             | Type                           | Default | Description                                                                                                                                                                                                                             |
| ---------------- | ------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`             | `FunctionComponent`            | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `defaultValue`   | `string`                       | `-`     | The default value of the text area when initially rendered. Use when you do not need to control its the value.                                                                                                                          |
| `value`          | `Signal<string>`               | `-`     | The controlled value of the text area. Must be used in conjunction with `onValueChange$`.                                                                                                                                               |
| `onValueChange$` | `QRL<(value: string) => void>` | `-`     | Event handler called when the value of the text area changes.                                                                                                                                                                           |
| `name`           | `string`                       | `-`     | The name of the text area. Submitted with its owning form as part of a name/value pair.                                                                                                                                                 |
| `disabled`       | `boolean`                      | `-`     | When `true`, prevents the user from interacting with the text area.                                                                                                                                                                     |
| `invalid`        | `boolean`                      | `-`     | Whether the text area is invalid.                                                                                                                                                                                                       |
| `required`       | `boolean`                      | `-`     | When `true`, indicates that the user must fill the text area before the owning form can be submitted.                                                                                                                                   |
| `readOnly`       | `boolean`                      | `-`     | Whether the text area is read-only.                                                                                                                                                                                                     |
| `style`          | `CSSProperties`                | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                 |
| ----------------- | ---------------------- |
| `[data-scope]`    | `"text-area"`          |
| `[data-part]`     | `"root"`               |
| `[data-disabled]` | Present when disabled  |
| `[data-invalid]`  | Present when invalid   |
| `[data-required]` | Present when required  |
| `[data-readonly]` | Present when read only |

### Label

The label that gives the user information on the text area. This component is based on the `label` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                 |
| ----------------- | ---------------------- |
| `[data-scope]`    | `"text-area"`          |
| `[data-part]`     | `"label"`              |
| `[data-disabled]` | Present when disabled  |
| `[data-invalid]`  | Present when invalid   |
| `[data-required]` | Present when required  |
| `[data-readonly]` | Present when read only |

### Input

The native HTML textarea. This component is based on the `textarea` element.

| Prop            | Type                | Default | Description                                                                                                                                                                                                                             |
| --------------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`            | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `submitOnEnter` | `boolean`           | `-`     | Whether the form should be submitted when the user presses the `enter` key.                                                                                                                                                             |
| `style`         | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                 |
| ----------------- | ---------------------- |
| `[data-scope]`    | `"text-area"`          |
| `[data-part]`     | `"input"`              |
| `[data-disabled]` | Present when disabled  |
| `[data-invalid]`  | Present when invalid   |
| `[data-required]` | Present when required  |
| `[data-readonly]` | Present when read only |

### Description

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                 |
| ----------------- | ---------------------- |
| `[data-scope]`    | `"text-area"`          |
| `[data-part]`     | `"description"`        |
| `[data-disabled]` | Present when disabled  |
| `[data-invalid]`  | Present when invalid   |
| `[data-required]` | Present when required  |
| `[data-readonly]` | Present when read only |

### ErrorMessage

The error message that gives the user information about how to fix a validation error on the text area. By default, it will render only when the `invalid` prop is set to `true` on `TextArea.Root` component, use the `forceMount` prop to always render the error message. This component is based on the `span` element.

| Prop         | Type                | Default | Description                                                                                                                                                                                                                             |
| ------------ | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`         | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `forceMount` | `boolean`           | `-`     | Used to force mounting when more control is needed.                                                                                                                                                                                     |
| `style`      | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                 |
| ----------------- | ---------------------- |
| `[data-scope]`    | `"text-area"`          |
| `[data-part]`     | `"error-message"`      |
| `[data-disabled]` | Present when disabled  |
| `[data-invalid]`  | Present when invalid   |
| `[data-required]` | Present when required  |
| `[data-readonly]` | Present when read only |

## Examples

### Description

The `TextArea.Description` component can be used to associate additional help text with a text area.

```tsx
import { component$ } from '@builder.io/qwik';
import { TextArea } from 'qwik-primitives';

const TextAreaDemo = component$(() => {
  return (
    <TextArea.Root>
      <TextArea.Label>Your Message</TextArea.Label>
      <TextArea.Input placeholder="Type your message here." />
      <TextArea.Description>Your message will be copied to the support team.</TextArea.Description>
    </TextArea.Root>
  );
});
```

### Error message

The `TextArea.ErrorMessage` component can be used to help the user fix a validation error. By default, it will render only when the `invalid` prop is set to `true` on `TextArea.Root` component, use the `forceMount` prop to always render the error message.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { TextArea } from 'qwik-primitives';

const TextAreaDemo = component$(() => {
  const bio = useSignal('');

  return (
    <TextArea.Root value={bio} onValueChange$={(value) => (bio.value = value)} invalid={bio.value.length <= 9}>
      <TextArea.Label>Bio</TextArea.Label>
      <TextArea.Input placeholder="Tell us a little bit about yourself" />
      <TextArea.ErrorMessage>Bio must be at least 10 characters.</TextArea.ErrorMessage>
    </TextArea.Root>
  );
});
```

### HTML forms

The `TextArea.Root` component `name` prop can be used for integration with HTML forms.

```tsx
import { component$, $ } from '@builder.io/qwik';
import { TextArea } from 'qwik-primitives';

const TextAreaDemo = component$(() => {
  const handleSubmit$ = $((event: SubmitEvent) => {
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);
    const message = formData.get('message');

    if (message !== null) {
      alert(JSON.stringify({ message }, null, 2));
    }
  });

  return (
    <form preventdefault:submit={true} onSubmit$={handleSubmit$}>
      <TextArea.Root name="message">
        <TextArea.Label>Your Message</TextArea.Label>
        <TextArea.Input placeholder="Type your message here." />
      </TextArea.Root>

      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
    </form>
  );
});
```
