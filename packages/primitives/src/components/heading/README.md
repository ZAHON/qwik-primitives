# Heading

Semantic heading element.

## Features

- Manages different heading levels with `level` prop.

## Import

```tsx
import { Heading } from 'qwik-primitives';
```

## Anatomy

Import the component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Heading } from 'qwik-primitives';

const HeadingDemo = component$(() => {
  return <Heading.Root />;
});
```

## Usage

```tsx
import { component$ } from '@builder.io/qwik';
import { Heading } from 'qwik-primitives';

const HeadingDemo = component$(() => {
  return <Heading.Root>The quick brown fox jumps over the lazy dog</Heading.Root>;
});
```

## API Reference

### Root

Contains the content for the heading. This component is based on the `h1` element.

| Prop    | Type                                     | Default | Description                                                                                                                                                                                                                             |
| ------- | ---------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent`                      | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `level` | `"1" \| "2" \| "3" \| "4" \| "5" \| "6"` | `"1"`   | The level of the heading, determines which tag will be used (h1-h6).                                                                                                                                                                    |
| `style` | `CSSProperties`                          | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute | Values                                   |
| -------------- | ---------------------------------------- |
| `[data-scope]` | `"heading"`                              |
| `[data-part]`  | `"root"`                                 |
| `[data-level]` | `"1" \| "2" \| "3" \| "4" \| "5" \| "6"` |

## Examples

### Different heading levels

You can easily change the level of the header using the `level` prop. This prop determines which tag will be used (h1-h6).

```tsx
import { component$ } from '@builder.io/qwik';
import { Heading } from 'qwik-primitives';

const HeadingDemo = component$(() => {
  return (
    <>
      <Heading.Root level="1">This is h1</Heading.Root>
      <Heading.Root level="2">This is h2</Heading.Root>
      <Heading.Root level="3">This is h3</Heading.Root>
      <Heading.Root level="4">This is h4</Heading.Root>
      <Heading.Root level="5">This is h5</Heading.Root>
      <Heading.Root level="6">This is h6</Heading.Root>
    </>
  );
});
```
