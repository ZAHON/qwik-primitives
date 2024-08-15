# Dialog

A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.

## Features

- Adheres to the [Dialog WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

- Provides screen reader announcements via rendered title and description.

- Focus is trapped and scrolling is blocked while it is open.

- Pressing `Esc` closes the dialog.

- Can be controlled or uncontrolled.

## Import

```tsx
import { Dialog } from 'qwik-primitives';
```

## Anatomy

Import the component and piece the parts together.

```tsx
import { component$ } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';

const DialogDemo = component$(() => {
  return (
    <Dialog.Root>
      <Dialog.Trigger />
      <Dialog.Content>
        <Dialog.Title />
        <Dialog.Description />
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Root>
  );
});
```

## Usage

Dialog component can be uncontrolled or controlled.

### Uncontrolled

```tsx
import { component$ } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';

const DialogDemo = component$(() => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Dialog title</Dialog.Title>
        <Dialog.Description>Dialog description</Dialog.Description>
        <Dialog.Close>Close dialog</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
});
```

### Controlled

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';

const DialogDemo = component$(() => {
  const isOpen = useSignal(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange$={() => (isOpen.value = !isOpen.value)}>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Dialog title</Dialog.Title>
        <Dialog.Description>Dialog description</Dialog.Description>
        <Dialog.Close>Close dialog</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
});
```

## API Reference

### Root

Contains all the parts of a dialog.

| Prop            | Type                           | Default | Description                                                                                                     |
| --------------- | ------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------- |
| `defaultOpen`   | `boolean`                      | `-`     | The open state of the dialog when it is initially rendered. Use when you do not need to control its open state. |
| `open`          | `Signal<boolean>`              | `-`     | The controlled open state of the dialog. Must be used in conjunction with `onOpenChange$`.                      |
| `onOpenChange$` | `QRL<(open: boolean) => void>` | `-`     | Event handler called when the open state of the dialog changes.                                                 |

### Trigger

The button that opens the dialog. This component is based on the `button` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute | Values               |
| -------------- | -------------------- |
| `[data-state]` | `"open" \| "closed"` |

### Content

Contains content to be rendered in the open dialog. This component is based on the `dialog` element.

| Prop                        | Type                | Default | Description                                                                                                                                                                                                                             |
| --------------------------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`                        | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `preventScroll`             | `boolean`           | `true`  | Whether to prevent scrolling behind the dialog when it's opened.                                                                                                                                                                        |
| `trapFocus`                 | `boolean`           | `true`  | Whether to trap focus inside the dialog when it's opened.                                                                                                                                                                               |
| `closeOnEscapeKeyDown`      | `boolean`           | `true`  | Whether to close the dialog when the escape key is down.                                                                                                                                                                                |
| `closeOnPointerDownOutside` | `boolean`           | `true`  | Whether to close the dialog when the outside is clicked.                                                                                                                                                                                |
| `onEscapeKeyDown$`          | `QRL<() => void>`   | `-`     | Event handler called when the escape key is down.                                                                                                                                                                                       |
| `onPointerDownOutside$`     | `QRL<() => void>`   | `-`     | Event handler called when a pointer event occurs outside the bounds of the component.                                                                                                                                                   |
| `onOpen$`                   | `QRL<() => void>`   | `-`     | Event handler called when the content is fully open. If you animate the content when it opens this event handler was call after animation end.                                                                                          |
| `onClose$`                  | `QRL<() => void>`   | `-`     | Event handler called when the content is fully close. If you animate the content when it closes this event handler was call after animation end.                                                                                        |
| `style`                     | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute | Values               |
| -------------- | -------------------- |
| `[data-state]` | `"open" \| "closed"` |

### Close

The button that closes the dialog. his component is based on the `button` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

### Title

An accessible title to be announced when the dialog is opened. This component is based on the `h2` element.

| Prop             | Type                | Default | Description                                                                                                                                                                                                                             |
| ---------------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`             | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `visuallyHidden` | `boolean`           | `-`     | When `true`, title will be hide from the screen in an accessible way.                                                                                                                                                                   |
| `style`          | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

### Description

An optional accessible description to be announced when the dialog is opened. This component is based on the `p` element.

| Prop             | Type                | Default | Description                                                                                                                                                                                                                             |
| ---------------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`             | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `visuallyHidden` | `boolean`           | `-`     | When `true`, title will be hide from the screen in an accessible way.                                                                                                                                                                   |
| `style`          | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

## Examples

### Initially open

`Dialog.Content` component is based on
HTML `dialog` element. Opening or closing this component is only possible in the browser. There is no way to do it on the server side. For this reason, to get the effect of an initially opened Dialog, you need to use `useVisibleTask$`.

```tsx
import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';

const DialogDemo = component$(() => {
  const isOpen = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    () => {
      isOpen.value = true;
    },
    { strategy: 'document-ready' }
  );

  return (
    <Dialog.Root open={isOpen} onOpenChange$={() => (isOpen.value = !isOpen.value)}>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Dialog title</Dialog.Title>
        <Dialog.Description>Dialog description</Dialog.Description>
        <Dialog.Close>Close dialog</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
});
```

### Animations

The example below shows how to animate Dialog content when it opens/closes.

```tsx
// index.tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';
import styles from './styles.css?inline';

const DialogDemo = component$(() => {
  useStyles$(styles);

  return (
    <Dialog.Root>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Content class="dialog-content">
        <Dialog.Title>Dialog title</Dialog.Title>
        <Dialog.Description>Dialog description</Dialog.Description>
        <Dialog.Close>Close dialog</Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
});
```

```css
/* styles.css */
.dialog-content {
  margin: unset;
  border: unset;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
}

.dialog-content[data-state='open'] {
  animation: dialog-content-show 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.dialog-content[data-state='closed'] {
  animation: dialog-content-hide 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.dialog-content::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog-content[data-state='open']::backdrop {
  animation: dialog-content-backdrop-show 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.dialog-content[data-state='closed']::backdrop {
  animation: dialog-content-backdrop-hide 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes dialog-content-show {
  0% {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes dialog-content-hide {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
}

@keyframes dialog-content-backdrop-show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes dialog-content-backdrop-hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
```

### Close after asynchronous form submission

Use the controlled props to programmatically close the Dialog after an async operation has completed.

```tsx
import { component$, useSignal, $ } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';

const wait = () => new Promise((resolve) => setTimeout(resolve, 1500));

const DialogDemo = component$(() => {
  const isOpen = useSignal(false);

  const handleSubmit$ = $(async () => {
    wait().then(() => (isOpen.value = false));
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange$={() => (isOpen.value = !isOpen.value)}>
      <Dialog.Trigger>Open dialog</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Dialog title</Dialog.Title>
        <Dialog.Description>Dialog description</Dialog.Description>
        <Dialog.Close>Close dialog</Dialog.Close>
        <form preventdefault:submit={true} onSubmit$={handleSubmit$}>
          <button type="submit">Submit</button>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
});
```

## Accessibility

Adheres to the [Dialog WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

### Keyboard Interactions

| Key           | Description                                            |
| ------------- | ------------------------------------------------------ |
| `Space`       | Opens/closes the dialog.                               |
| `Enter`       | Opens/closes the dialog.                               |
| `Tab`         | Moves focus to the next focusable element.             |
| `Shift + Tab` | Moves focus to the previous focusable element.         |
| `Esc`         | Closes the dialog and moves focus to `Dialog.Trigger`. |