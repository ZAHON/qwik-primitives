# Label

Renders an accessible label associated with controls.

## Features

- Text selection is prevented when double clicking label.

- Supports nested controls.

## Import

```tsx
import { Label } from 'qwik-primitives';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Label } from 'qwik-primitives';

const LabelDemo = component$(() => {
  return <Label.Root />;
});
```

## Usage

```tsx
import { component$ } from '@builder.io/qwik';
import { Label } from 'qwik-primitives';

const LabelDemo = component$(() => {
  return (
    <>
      <Label.Root for="first-name">First name</Label.Root>
      <input id="first-name" type="text" />
    </>
  );
});
```

## API Reference

### Root

Contains the content for the label. This component is based on the `label` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `for`   | `string`            | `-`     | The id of the element the label is associated with.                                                                                                                                                                                     |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute | Values    |
| -------------- | --------- |
| `[data-scope]` | `"label"` |
| `[data-part]`  | `"root"`  |

## Accessibility

This component is based on the native `label` element, it will automatically apply the correct labelling when wrapping controls or using the `for` attribute. For your own custom controls to work correctly, ensure they use native elements such as `button` or `input` as a base.
