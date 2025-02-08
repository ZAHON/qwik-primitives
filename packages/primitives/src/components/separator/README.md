# Separator

Visually or semantically separates content.

## Features

- Supports horizontal and vertical orientations.

## Import

```tsx
import { Separator } from 'qwik-primitives';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Separator } from 'qwik-primitives';

const SeparatorDemo = component$(() => {
  return <Separator.Root />;
});
```

## Usage

```tsx
import { component$ } from '@builder.io/qwik';
import { Separator } from 'qwik-primitives';

const SeparatorDemo = component$(() => {
  return (
    <div>
      <h3>Qwik Primitives</h3>
      <p>Unstyled, accessible components for building high-quality design systems and web apps in Qwik.</p>
      <Separator.Root style={{ margin: '1rem 0', height: '0.0625rem', width: '100%', backgroundColor: '#000000' }} />
      <div style={{ height: '1rem', display: 'flex', alignItems: 'center' }}>
        <span>Blog</span>
        <Separator.Root
          orientation="vertical"
          style={{ margin: '0 1rem', height: '100%', width: '0.0625rem', backgroundColor: '#000000' }}
        />
        <span>Docs</span>
        <Separator.Root
          orientation="vertical"
          style={{ margin: '0 1rem', height: '100%', width: '0.0625rem', backgroundColor: '#000000' }}
        />
        <span>Source</span>
      </div>
    </div>
  );
});
```

## API Reference

### Root

| Prop          | Type                         | Default        | Description                                                                                                                                                                                                                             |
| ------------- | ---------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`          | `FunctionComponent`          | `-`            | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | The orientation of the separator.                                                                                                                                                                                                       |
| `decorative`  | `boolean`                    | `-`            | When `true`, signifies that it is purely visual, carries no semantic meaning and ensures it is not present in the accessibility tree.                                                                                                   |
| `style`       | `CSSProperties`              | `-`            | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute       | Values                       |
| -------------------- | ---------------------------- |
| `[data-scope]`       | `"separator"`                |
| `[data-part]`        | `"root"`                     |
| `[data-orientation]` | `"vertical" \| "horizontal"` |

## Examples

### Vertical orientation

Use the `orientation` prop to create a vertical separator.

```tsx
import { component$ } from '@builder.io/qwik';
import { Separator } from 'qwik-primitives';

const SeparatorDemo = component$(() => {
  return (
    <div style={{ height: '1rem', display: 'flex', alignItems: 'center' }}>
      <span>Blog</span>
      <Separator.Root
        orientation="vertical"
        style={{ margin: '0 1rem', height: '100%', width: '0.0625rem', backgroundColor: '#000000' }}
      />
      <span>Docs</span>
      <Separator.Root
        orientation="vertical"
        style={{ margin: '0 1rem', height: '100%', width: '0.0625rem', backgroundColor: '#000000' }}
      />
      <span>Source</span>
    </div>
  );
});
```

## Accessibility

Adheres to the [`separator` role requirements](https://www.w3.org/TR/wai-aria-1.2/#separator).
