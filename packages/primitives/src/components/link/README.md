# Link

Semantic element for navigation between pages.

## Features

- Support for disabled links.

## Import

```tsx
import { Link } from 'qwik-primitives';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Link } from 'qwik-primitives';

const LinkDemo = component$(() => {
  return <Link.Root />;
});
```

## Usage

```tsx
import { component$ } from '@builder.io/qwik';
import { Link } from 'qwik-primitives';

const LinkDemo = component$(() => {
  return <Link.Root href="https://github.com/ZAHON/qwik-primitives">Qwik Primitives</Link.Root>;
});
```

## API Reference

### Root

Contains the content for the link. This component is based on the `a` element.

| Prop       | Type                | Default | Description                                                                                                                                                                                                                             |
| ---------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`       | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `disabled` | `boolean`           | `-`     | Whether the link is disabled. Native navigation will be disabled, and the link will be exposed as disabled to assistive technology.                                                                                                     |
| `href`     | `string`            | `-`     | A URL to link to.                                                                                                                                                                                                                       |
| `style`    | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"link"`              |
| `[data-part]`     | `"root"`              |
| `[data-disabled]` | Present when disabled |

## Examples

### Disabled

Use the `disabled` prop to disable a link while keeping it accessible for screen readers.

```tsx
import { component$ } from '@builder.io/qwik';
import { Link } from 'qwik-primitives';

const LinkDemo = component$(() => {
  return (
    <Link.Root disabled={true} href="https://github.com/ZAHON/qwik-primitives">
      Qwik Primitives
    </Link.Root>
  );
});
```

## Accessibility

This component is based on the native `a` element.

### Keyboard Interactions

| Key     | Description         |
| ------- | ------------------- |
| `Enter` | Activates the link. |
