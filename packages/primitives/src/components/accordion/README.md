# Accordion

A vertically stacked set of interactive headings that each reveal an associated section of content.

## Features

- Full keyboard navigation.

- Can expand one or multiple items.

- Can be controlled or uncontrolled.

- Adheres to the [Accordion WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

## Import

```tsx
import { Accordion } from 'qwik-primitives';
```

## Anatomy

Import the component and piece the parts together.

```tsx
import { component$ } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';

const AccordionDemo = component$(() => {
  return (
    <Accordion.Root>
      <Accordion.Item>
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent />
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
```

## Usage

Accordion component can be uncontrolled or controlled.

### Uncontrolled

```tsx
import { component$ } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';

const AccordionDemo = component$(() => {
  return (
    <Accordion.Root type="single">
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it accessible?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it unstyled?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It's unstyled by default.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Can it be animated?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes! You can animate the Accordion with CSS.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
```

### Controlled

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';

const AccordionDemo = component$(() => {
  const accordionValue = useSignal('');

  return (
    <Accordion.Root type="single" value={accordionValue} onValueChange$={(value) => (accordionValue.value = value)}>
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it accessible?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it unstyled?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It's unstyled by default.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Can it be animated?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes! You can animate the Accordion with CSS.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
```

## API Reference

### Root

Contains all the parts of an accordion. This component is based on the `div` element.

| Prop             | Type                             | Default | Description                                                                                                                                                                                                                             |
| ---------------- | -------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`             | `FunctionComponent`              | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `type*`          | `"single" \| "multiple"`         | `-`     | Determines whether one or multiple items can be opened at the same time.                                                                                                                                                                |
| `defaultValue`   | `string`                         | `-`     | The value of the item to expand when initially rendered and `type` is `"single"`. Use when you do not need to control the state of the items.                                                                                           |
| `value`          | `Signal<string>`                 | `-`     | The controlled value of the item to expand when `type` is `"single"`. Must be used in conjunction with `onValueChange$`.                                                                                                                |
| `onValueChange$` | `QRL<(value: string) => void>`   | `-`     | Event handler called when the expanded state of an item changes and `type` is `"single"`.                                                                                                                                               |
| `defaultValue`   | `string[]`                       | `-`     | The value of the item to expand when initially rendered when `type` is `"multiple"`. Use when you do not need to control the state of the items.                                                                                        |
| `value`          | `Signal<string[]>`               | `-`     | The controlled value of the item to expand when `type` is `"multiple"`. Must be used in conjunction with `onValueChange$`.                                                                                                              |
| `onValueChange$` | `QRL<(value: string[]) => void>` | `-`     | Event handler called when the expanded state of an item changes and `type` is `"multiple"`.                                                                                                                                             |
| `collapsible`    | `boolean`                        | `-`     | When `type` is `"single"`, allows closing content when clicking trigger for an open item.                                                                                                                                               |
| `disabled`       | `boolean`                        | `-`     | When `true`, prevents the user from interacting with the accordion and all its items.                                                                                                                                                   |
| `style`          | `CSSProperties`                  | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"accordion"`         |
| `[data-part]`     | `"root"`              |
| `[data-disabled]` | Present when disabled |

### Item

Contains all the parts of a collapsible section. This component is based on the `div` element.

| Prop       | Type                | Default | Description                                                                                                                                                                                                                             |
| ---------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`       | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `value*`   | `string`            | `-`     | A unique value for the item.                                                                                                                                                                                                            |
| `disabled` | `boolean`           | `-`     | When `true`, prevents the user from interacting with the item.                                                                                                                                                                          |
| `style`    | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"accordion"`         |
| `[data-part]`     | `"item"`              |
| `[data-state]`    | `"open" \| "closed"`  |
| `[data-disabled]` | Present when disabled |

### ItemHeader

Wraps an `Accordion.ItemTrigger`. Use the `level` prop to update it to the appropriate heading level for your page. This component is based on the `h3` element.

| Prop    | Type                                     | Default | Description                                                                                                                                                                                                                             |
| ------- | ---------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent`                      | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `level` | `"1" \| "2" \| "3" \| "4" \| "5" \| "6"` | `"3"`   | The level of the heading, determines which tag will be used (h1-h6).                                                                                                                                                                    |
| `style` | `CSSProperties`                          | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                                   |
| ----------------- | ---------------------------------------- |
| `[data-scope]`    | `"accordion"`                            |
| `[data-part]`     | `"item-header"`                          |
| `[data-state]`    | `"open" \| "closed"`                     |
| `[data-disabled]` | Present when disabled                    |
| `[data-level]`    | `"1" \| "2" \| "3" \| "4" \| "5" \| "6"` |

### ItemTrigger

Toggles the collapsed state of its associated item. It should be nested inside of an `Accordion.ItemHeader`. This component is based on the `button` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"accordion"`         |
| `[data-part]`     | `"item-trigger"`      |
| `[data-state]`    | `"open" \| "closed"`  |
| `[data-disabled]` | Present when disabled |

### ItemIndicator

An optional decorative element that indicates the state of the accordion item. It should be nested inside of an `Accordion.ItemTrigger`. This component is based on the `span` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"accordion"`         |
| `[data-part]`     | `"item-indicator"`    |
| `[data-state]`    | `"open" \| "closed"`  |
| `[data-disabled]` | Present when disabled |

### ItemPanel

The panel that expands/collapses. This component is based on the `div` element.

| Prop       | Type                | Default | Description                                                                                                                                                                                                                             |
| ---------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`       | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `onOpen$`  | `QRL<() => void>`   | `-`     | Event handler called when the panel is fully open. If you animate the size of the panel when it opens this event handler was call after animation end.                                                                                  |
| `onClose$` | `QRL<() => void>`   | `-`     | Event handler called when the panel is fully close. If you animate the size of the panel when it closes this event handler was call after animation end.                                                                                |
| `style`    | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"accordion"`         |
| `[data-part]`     | `"item-panel"`        |
| `[data-state]`    | `"open" \| "closed"`  |
| `[data-disabled]` | Present when disabled |

### ItemContent

The component that contains the collapsible content for an item. Must be nested inside `Accordion.ItemPanel`. This component is based on the `div` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"accordion"`         |
| `[data-part]`     | `"item-content"`      |
| `[data-state]`    | `"open" \| "closed"`  |
| `[data-disabled]` | Present when disabled |

## Examples

### Expanded by default

Use the `defaultValue` prop to define the open item by default.

```tsx
import { component$ } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';

const AccordionDemo = component$(() => {
  return (
    <Accordion.Root type="single" defaultValue="item-1">
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it accessible?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it unstyled?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It's unstyled by default.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Can it be animated?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes! You can animate the Accordion with CSS.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
```

### Allow collapsing all items

Use the `collapsible` prop to allow all items to close.

```tsx
import { component$ } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';

const AccordionDemo = component$(() => {
  return (
    <Accordion.Root type="single" collapsible={true}>
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it accessible?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it unstyled?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It's unstyled by default.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Can it be animated?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes! You can animate the Accordion with CSS.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
```

### Multiple items open at the same time

Set the type `prop` to `"multiple"` to enable opening multiple items at once.

```tsx
import { component$ } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';

const AccordionDemo = component$(() => {
  return (
    <Accordion.Root type="multiple">
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it accessible?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it unstyled?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It's unstyled by default.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Can it be animated?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes! You can animate the Accordion with CSS.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
```

### Rotated icon when item open

You can nest inside of an `Accordion.ItemIndicator` extra decorative elements, such as chevrons, and rotate it when the item is open.

```tsx
// index.tsx
import type { PropsOf } from '@builder.io/qwik';
import { component$, useStyles$ } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';
import styles from './styles.css?inline';

const ChevronLeftIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

const AccordionDemo = component$(() => {
  useStyles$(styles);

  return (
    <Accordion.Root type="single">
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>
            Is it accessible?
            <Accordion.ItemIndicator class="accordion-item-indicator">
              <ChevronLeftIcon class="accordion-item-indicator-icon" />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>
            Is it unstyled?
            <Accordion.ItemIndicator class="accordion-item-indicator">
              <ChevronLeftIcon class="accordion-item-indicator-icon" />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes. It's unstyled by default.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>
            Can it be animated?
            <Accordion.ItemIndicator class="accordion-item-indicator">
              <ChevronLeftIcon class="accordion-item-indicator-icon" />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel>
          <Accordion.ItemContent>Yes! You can animate the Accordion with CSS.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
```

```css
/* styles.css */
.accordion-item-indicator[data-state='open'] > .accordion-item-indicator-icon {
  transform: rotate(-90deg);
}
```

### Animating item panel size

Use the `grid-template-rows` CSS property with `0fr` or `1fr` value to animate the size of the item panel when it opens/closes.

```tsx
// index.tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';
import styles from './styles.css?inline';

const AccordionDemo = component$(() => {
  useStyles$(styles);

  return (
    <Accordion.Root type="single">
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it accessible?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel class="accordion-item-panel">
          <Accordion.ItemContent>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Is it unstyled?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel class="accordion-item-panel">
          <Accordion.ItemContent>Yes. It's unstyled by default.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.ItemHeader>
          <Accordion.ItemTrigger>Can it be animated?</Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemPanel class="accordion-item-panel">
          <Accordion.ItemContent>Yes! You can animate the Accordion with CSS.</Accordion.ItemContent>
        </Accordion.ItemPanel>
      </Accordion.Item>
    </Accordion.Root>
  );
});
```

```css
/* styles.css */
.accordion-item-panel[data-state='open'] {
  animation: accordion-item-panel-down 300ms ease-out;
}

.accordion-item-panel[data-state='closed'] {
  animation: accordion-item-panel-up 300ms ease-out;
}

@keyframes accordion-item-panel-down {
  0% {
    grid-template-rows: 0fr;
  }
  100% {
    grid-template-rows: 1fr;
  }
}

@keyframes accordion-item-panel-up {
  0% {
    grid-template-rows: 1fr;
  }
  100% {
    grid-template-rows: 0fr;
  }
}
```

## Accessibility

Adheres to the [Accordion WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

### Keyboard Interactions

| Key           | Description                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| `Space`       | When focus is on an `Accordion.ItemTrigger` of a collapsed section, expands the section.                  |
| `Enter`       | When focus is on an `Accordion.ItemTrigger` of a collapsed section, expands the section.                  |
| `Tab`         | Moves focus to the next focusable element.                                                                |
| `Shift + Tab` | Moves focus to the previous focusable element.                                                            |
| `ArrowDown`   | When focus is on an `Accordion.ItemTrigger`, moves focus to the next enabled `Accordion.ItemTrigger`.     |
| `ArrowUp`     | When focus is on an `Accordion.ItemTrigger`, moves focus to the previous enabled `Accordion.ItemTrigger`. |
| `Home`        | When focus is on an `Accordion.ItemTrigger`, moves focus to the first enabled `Accordion.ItemTrigger`.    |
| `End`         | When focus is on an `Accordion.ItemTrigger`, moves focus to the last enabled `Accordion.ItemTrigger`.     |
