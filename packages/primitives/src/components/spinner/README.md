# Spinner

Displays an animated loading indicator.

## Features

- Support for SVG spinners.

- Support for CSS spinners.

## Import

```tsx
import { Spinner } from 'qwik-primitives';
```

## Anatomy

Import all parts and piece them together.

```tsx
import { component$ } from '@builder.io/qwik';
import { Spinner } from 'qwik-primitives';

const SpinnerDemo = component$(() => {
  return (
    <Spinner.Root>
      <Spinner.Label />
    </Spinner.Root>
  );
});
```

## Usage

```tsx
import { component$ } from '@builder.io/qwik';
import { Spinner } from 'qwik-primitives';

const SpinnerDemo = component$(() => {
  return (
    <Spinner.Root>
      <Spinner.Label>Loading, plase wait</Spinner.Label>
    </Spinner.Root>
  );
});
```

## API Reference

### Root

Contains all the parts of a spinner. This component is based on the `span` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute | Values      |
| -------------- | ----------- |
| `[data-scope]` | `"spinner"` |
| `[data-part]`  | `"root"`    |

### Label

The fallback loading text. This text by default will be only visible to screen readers. This component is based on the `span` element.

| Prop             | Type                | Default | Description                                                                                                                                                                                                                             |
| ---------------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`             | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `visuallyHidden` | `boolean`           | `true`  | When `true`, label will be hide from the screen in an accessible way.                                                                                                                                                                   |
| `style`          | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute | Values      |
| -------------- | ----------- |
| `[data-scope]` | `"spinner"` |
| `[data-part]`  | `"label"`   |

## Examples

### With label

By default the content of `Spinner.Label` will be only visible to screen readers. If you want the label to be visible pass `visuallyHidden={false}` on `Spinner.Label` component.

```tsx
import { component$ } from '@builder.io/qwik';
import { Spinner } from 'qwik-primitives';

const SpinnerDemo = component$(() => {
  return (
    <Spinner.Root>
      <Spinner.Label visuallyHidden={false}>Loading, plase wait</Spinner.Label>
    </Spinner.Root>
  );
});
```

### SVG Spinner

You can use this compnent as an accessible container for svg spinner.

```tsx
import { component$ } from '@builder.io/qwik';
import { Spinner } from 'qwik-primitives';

const SpinnerDemo = component$(() => {
  return (
    <Spinner.Root>
      <svg
        width="1.5rem"
        height="1.5rem"
        stroke="currentColor"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(2.5 2.5)" stroke-width="5">
            <circle stroke-opacity=".5" cx="16" cy="16" r="16"></circle>
            <path d="M32 16c0-9.94-8.06-16-16-16">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 16 16"
                to="360 16 16"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
      <Spinner.Label>Loading, plase wait</Spinner.Label>
    </Spinner.Root>
  );
});
```

### CSS Spinner

You can use this compnent as an accessible container for CSS spinner.

```tsx
// index.tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { Spinner } from 'qwik-primitives';
import styles from './styles.css?inline';

const SpinnerDemo = component$(() => {
  useStyles$(styles);

  return (
    <Spinner.Root>
      <span class="my-spinner" />
      <Spinner.Label>Loading, plase wait</Spinner.Label>
    </Spinner.Root>
  );
});
```

```css
/* styles.css */
.my-spinner {
  position: relative;
  display: block;
  height: 1.5rem;
  width: 1.5rem;
}

.my-spinner::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.5;
  border: 3px solid currentColor;
  border-radius: 9999px;
}

.my-spinner::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 3px solid currentColor;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-radius: 9999px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```
