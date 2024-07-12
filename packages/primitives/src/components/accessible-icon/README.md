# Accessible Icon

Makes icons accessible by adding a label.

## Features

- Quickly make any icon accessible by pass it via `as` prop and providing a meaningful label.

- No visual difference, but announced correctly by screen readers.

## Import

```tsx
import { AccessibleIcon } from 'qwik-primitives';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { AccessibleIcon } from 'qwik-primitives';

const AccessibleIconDemo = component$(() => {
  return <AccessibleIcon.Root />;
});
```

## Usage

```tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { AccessibleIcon } from 'qwik-primitives';

const CrossIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg viewBox="0 0 32 32" width={24} height={24} fill="none" stroke="currentColor" {...props}>
      <path d="M2 30 L30 2 M30 30 L2 2" />
    </svg>
  );
});

const AccessibleIconDemo = component$(() => {
  return (
    <button type="button">
      <AccessibleIcon.Root as={CrossIcon} label="Close" />
    </button>
  );
});
```

## API Reference

### Root

Contains the icon to make accessible. This component is based on the `svg` element.

| Prop     | Type                | Default | Description                                                                                                                                       |
| -------- | ------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as*`    | `FunctionComponent` | `-`     | The `svg` icon that you would be like accessible by adding a label.                                                                               |
| `label*` | `string`            | `-`     | The accessible label for the icon. This label will be visually hidden but announced to screen reader users, similar to `alt` text for `img` tags. |
| `style`  | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                 |

## Accessibility

Most icons or icon systems come with no accessibility built-in. For example, the same visual cross icon may in fact mean **"close"** or **"delete"**. This component lets you give meaning to icons used throughout your app.
