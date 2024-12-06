# Checkbox

A control that allows the user to toggle between checked and not checked.

## Features

- Built with a native `input` element.

- Labeling support for assistive technology.

- Required and invalid states exposed to assistive technology via ARIA.

- Support for description and error message help text linked to the input via ARIA.

- Supports indeterminate state.

- Syncs with form reset events.

- Full keyboard navigation.

- Can be controlled or uncontrolled.

## Import

```tsx
import { Checkbox } from 'qwik-primitives';
```

## Anatomy

Import the component and piece the parts together.

```tsx
import { component$ } from '@builder.io/qwik';
import { Checkbox } from 'qwik-primitives';

const CheckboxDemo = component$(() => {
  return (
    <Checkbox.Root>
      <Checkbox.Input />
      <Checkbox.Label />
      <Checkbox.Description />
      <Checkbox.ErrorMessage />
    </Checkbox.Root>
  );
});
```

## Usage

Checkbox component can be uncontrolled or controlled.

### Uncontrolled

```tsx
import { component$ } from '@builder.io/qwik';
import { Checkbox } from 'qwik-primitives';

const CheckboxDemo = component$(() => {
  return (
    <Checkbox.Root>
      <Checkbox.Input />
      <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
    </Checkbox.Root>
  );
});
```

### Controlled

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { Checkbox } from 'qwik-primitives';

const CheckboxDemo = component$(() => {
  const isChecked = useSignal<boolean | 'indeterminate'>(false);

  return (
    <Checkbox.Root checked={isChecked} onCheckedChange$={(checked) => (isChecked.value = checked)}>
      <Checkbox.Input />
      <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
    </Checkbox.Root>
  );
});
```

## API Reference

### Root

Contains all the parts of a checkbox. This component is based on the `div` element.

| Prop               | Type                                                 | Default | Description                                                                                                                                                                                                                             |
| ------------------ | ---------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`               | `FunctionComponent`                                  | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `defaultChecked`   | `boolean \| "indeterminate"`                         | `-`     | The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.                                                                                                                 |
| `checked`          | `Signal<boolean \| "indeterminate">`                 | `-`     | The controlled checked state of the checkbox. Must be used in conjunction with `onCheckedChange$`.                                                                                                                                      |
| `onCheckedChange$` | `QRL<(checked: boolean \| "indeterminate") => void>` | `-`     | Event handler called when the checked state of the checkbox changes.                                                                                                                                                                    |
| `name`             | `string`                                             | `-`     | The name of the checkbox. Submitted with its owning form as part of a name/value pair.                                                                                                                                                  |
| `value`            | `string`                                             | `"on"`  | The value given as data when submitted with a `name`.                                                                                                                                                                                   |
| `disabled`         | `boolean`                                            | `-`     | When `true`, prevents the user from interacting with the checkbox.                                                                                                                                                                      |
| `invalid`          | `boolean`                                            | `-`     | Whether the checkbox is invalid.                                                                                                                                                                                                        |
| `required`         | `boolean`                                            | `-`     | When `true`, indicates that the user must check the checkbox before the owning form can be submitted.                                                                                                                                   |
| `style`            | `CSSProperties`                                      | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                                        |
| ----------------- | --------------------------------------------- |
| `[data-scope]`    | `"checkbox"`                                  |
| `[data-part]`     | `"root"`                                      |
| `[data-state]`    | `"checked" \| "unchecked" \| "indeterminate"` |
| `[data-disabled]` | Present when disabled                         |
| `[data-invalid]`  | Present when invalid                          |
| `[data-required]` | Present when required                         |

### Input

The native HTML input. This component is based on the `input` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                                        |
| ----------------- | --------------------------------------------- |
| `[data-scope]`    | `"checkbox"`                                  |
| `[data-part]`     | `"input"`                                     |
| `[data-state]`    | `"checked" \| "unchecked" \| "indeterminate"` |
| `[data-disabled]` | Present when disabled                         |
| `[data-invalid]`  | Present when invalid                          |
| `[data-required]` | Present when required                         |

### Label

The label that gives the user information on the checkbox. This component is based on the `label` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                                        |
| ----------------- | --------------------------------------------- |
| `[data-scope]`    | `"checkbox"`                                  |
| `[data-part]`     | `"label"`                                     |
| `[data-state]`    | `"checked" \| "unchecked" \| "indeterminate"` |
| `[data-disabled]` | Present when disabled                         |
| `[data-invalid]`  | Present when invalid                          |
| `[data-required]` | Present when required                         |

### Description

The description that gives the user more information on the checkbox. This component is based on the `span` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                                        |
| ----------------- | --------------------------------------------- |
| `[data-scope]`    | `"checkbox"`                                  |
| `[data-part]`     | `"description"`                               |
| `[data-state]`    | `"checked" \| "unchecked" \| "indeterminate"` |
| `[data-disabled]` | Present when disabled                         |
| `[data-invalid]`  | Present when invalid                          |
| `[data-required]` | Present when required                         |

### ErrorMessage

The error message that gives the user information about how to fix a validation error on the checkbox. By default, it will render only when the `invalid` prop is set to `true` on `Checkbox.Root` component, use the `forceMount` prop to always render the error message. This component is based on the `span` element.

| Prop         | Type                | Default | Description                                                                                                                                                                                                                             |
| ------------ | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`         | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `forceMount` | `boolean`           | `-`     | Used to force mounting when more control is needed.                                                                                                                                                                                     |
| `style`      | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                                        |
| ----------------- | --------------------------------------------- |
| `[data-scope]`    | `"checkbox"`                                  |
| `[data-part]`     | `"error-message"`                             |
| `[data-state]`    | `"checked" \| "unchecked" \| "indeterminate"` |
| `[data-disabled]` | Present when disabled                         |
| `[data-invalid]`  | Present when invalid                          |
| `[data-required]` | Present when required                         |

## Examples

### Indeterminate

You can set the checkbox to `indeterminate` by taking control of its state.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { Checkbox } from 'qwik-primitives';

const CheckboxDemo = component$(() => {
  const isChecked = useSignal<boolean | 'indeterminate'>(false);

  return (
    <>
      <Checkbox.Root checked={isChecked} onCheckedChange$={(checked) => (isChecked.value = checked)}>
        <Checkbox.Input />
      </Checkbox.Root>

      <button
        type="button"
        onClick$={() => (isChecked.value = isChecked.value === 'indeterminate' ? false : 'indeterminate')}
      >
        Toggle indeterminate
      </button>
    </>
  );
});
```

### Description

The `Checkbox.Description` component can be used to associate additional help text with a text field.

```tsx
import { component$ } from '@builder.io/qwik';
import { Checkbox } from 'qwik-primitives';

const CheckboxDemo = component$(() => {
  return (
    <Checkbox.Root>
      <Checkbox.Input />
      <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
      <Checkbox.Description>You agree to our Terms of Service and Privacy Policy.</Checkbox.Description>
    </Checkbox.Root>
  );
});
```

### Error message

The `Checkbox.ErrorMessage` component can be used to help the user fix a validation error. By default, it will render only when the `invalid` prop is set to `true` on `Checkbox.Root` component, use the `forceMount` prop to always render the error message.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { Checkbox } from 'qwik-primitives';

const CheckboxDemo = component$(() => {
  const isChecked = useSignal<boolean | 'indeterminate'>(false);

  return (
    <Checkbox.Root
      checked={isChecked}
      onCheckedChange$={(checked) => (isChecked.value = checked)}
      invalid={!isChecked.value}
    >
      <Checkbox.Input />
      <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
      <Checkbox.ErrorMessage>You must agree to our Terms of Service and Privacy Policy.</Checkbox.ErrorMessage>
    </Checkbox.Root>
  );
});
```

### HTML forms

The `Checkbox.Root` component `name` prop can be used for integration with HTML forms.

```tsx
import { component$, $ } from '@builder.io/qwik';
import { Checkbox } from 'qwik-primitives';

const CheckboxDemo = component$(() => {
  const handleSubmit$ = $((event: SubmitEvent) => {
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);
    const mobile = formData.get('mobile');

    alert(JSON.stringify({ mobile }, null, 2));
  });

  return (
    <form preventdefault:submit={true} onSubmit$={handleSubmit$}>
      <Checkbox.Root name="mobile">
        <Checkbox.Input />
        <Checkbox.Label>Use different settings for my mobile devices</Checkbox.Label>
      </Checkbox.Root>

      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
    </form>
  );
});
```

## Accessibility

### Keyboard Interactions

| Key     | Description                   |
| ------- | ----------------------------- |
| `Space` | Checks/unchecks the checkbox. |
