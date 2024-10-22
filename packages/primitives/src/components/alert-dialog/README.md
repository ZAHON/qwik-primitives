# Alert Dialog

A modal dialog that interrupts the user with important content and expects a response.

## Features

- Focus is automatically trapped.

- Can be controlled or uncontrolled.

- Manages screen reader announcements with `Title` and `Description` components.

- `Esc` closes the component automatically.

## Import

```tsx
import { AlertDialog } from 'qwik-primitives';
```

## Anatomy

Import all parts and piece them together.

```tsx
import { component$ } from '@builder.io/qwik';
import { AlertDialog } from 'qwik-primitives';

const AlertDialogDemo = component$(() => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger />
      <AlertDialog.Content>
        <AlertDialog.Title />
        <AlertDialog.Description />
        <AlertDialog.Cancel />
        <AlertDialog.Action />
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
```

## Usage

Alert dialog component can be uncontrolled or controlled.

### Uncontrolled

```tsx
import { component$ } from '@builder.io/qwik';
import { AlertDialog } from 'qwik-primitives';

const AlertDialogDemo = component$(() => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
        <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
```

### Controlled

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { AlertDialog } from 'qwik-primitives';

const AlertDialogDemo = component$(() => {
  const isOpen = useSignal(false);

  return (
    <AlertDialog.Root open={isOpen} onOpenChange$={() => (isOpen.value = !isOpen.value)}>
      <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
        <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
```

### Root

Contains all the parts of an alert dialog.

| Prop            | Type                           | Default | Description                                                                                                           |
| --------------- | ------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------- |
| `defaultOpen`   | `boolean`                      | `-`     | The open state of the alert dialog when it is initially rendered. Use when you do not need to control its open state. |
| `open`          | `Signal`                       | `-`     | The controlled open state of the alert dialog. Must be used in conjunction with `onOpenChange$`.                      |
| `onOpenChange$` | `QRL<(open: boolean) => void>` | `-`     | Event handler called when the open state of the alert dialog changes.                                                 |

### Trigger

The button that opens the alert dialog. This component is based on the `button` element.

| Prop       | Type                | Default | Description                                                                                                                                                                                                                             |
| ---------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`       | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `disabled` | `boolean`           | `-`     | When `true`, prevents the user from interacting with the trigger.                                                                                                                                                                       |
| `style`    | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"alert-dialog"`      |
| `[data-part]`     | `"trigger"`           |
| `[data-state]`    | `"open" \| "closed"`  |
| `[data-disabled]` | Present when disabled |

### Content

Contains content to be rendered when the alert dialog is open. This component is based on the `dialog` element.

| Prop                   | Type                | Default | Description                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------- | ------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `as`                   | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.                                                                                                                                              |
| `loop`                 | `boolean`           | `true`  | When `true`, tabbing from last focusable element will focus first focusable element and `Shift + Tab` from first focusable element will focus last focusable element.                                                                                                                                                                                                                |
| `autoFocus`            | `boolean`           | `true`  | By default, when the component is opened, focus is programmatically moved to `AlertDialog.Cancel` to anticipate a response to the prompt. When `AlertDialog.Cancel` not exist or is disabled the focus will be move focus on the first focusable element. To specify the element that should receive initial focus, add `data-qwik-primitives-auto-focus` attribute on this element. |
| `restoreFocus`         | `boolean`           | `true`  | Whether to restore focus back to the `AlertDialog.Trigger` when the alert dialog is closed.                                                                                                                                                                                                                                                                                          |
| `preventScroll`        | `boolean`           | `true`  | Whether to prevent scrolling behind the alert dialog when it's opened.                                                                                                                                                                                                                                                                                                               |
| `closeOnBackPress`     | `boolean`           | `true`  | Whether to close the alert dialog when the back is press on mobile devices.                                                                                                                                                                                                                                                                                                          |
| `closeOnEscapeKeyDown` | `boolean`           | `true`  | Whether to close the alert dialog when the escape key is down.                                                                                                                                                                                                                                                                                                                       |
| `closeOnClickOutside`  | `boolean`           | `-`     | Whether to close the alert dialog when the outside is clicked.                                                                                                                                                                                                                                                                                                                       |
| `onEscapeKeyDown$`     | `QRL<() => void>`   | `-`     | Event handler called when the escape key is down.                                                                                                                                                                                                                                                                                                                                    |
| `onClickOutside$`      | `QRL<() => void>`   | `-`     | Event handler called when a pointer event occurs outside the bounds of the component.                                                                                                                                                                                                                                                                                                |
| `onOpen$`              | `QRL<() => void>`   | `-`     | Event handler called when the content is fully open. If you animate the content when it opens this event handler was call after animation end.                                                                                                                                                                                                                                       |
| `onClose$`             | `QRL<() => void>`   | `-`     | Event handler called when the content is fully close. If you animate the content when it closes this event handler was call after animation end.                                                                                                                                                                                                                                     |
| `style`                | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                                                                                                                                                                    |

| Data attribute | Values               |
| -------------- | -------------------- |
| `[data-scope]` | `"alert-dialog"`     |
| `[data-part]`  | `"content"`          |
| `[data-state]` | `"open" \| "closed"` |

### Cancel

A button that closes the alert dialog. This button should be distinguished visually from `AlertDialog.Action` buttons. This component is based on the `button` element.

| Prop       | Type                | Default | Description                                                                                                                                                                                                                             |
| ---------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`       | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `disabled` | `boolean`           | `-`     | When `true`, prevents the user from interacting with the component.                                                                                                                                                                     |
| `style`    | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"alert-dialog"`      |
| `[data-part]`     | `"cancel"`            |
| `[data-disabled]` | Present when disabled |

### Action

A button that closes the alert dialog. These buttons should be distinguished visually from the `AlertDialog.Cancel` button. This component is based on the `button` element.

| Prop       | Type                | Default | Description                                                                                                                                                                                                                             |
| ---------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`       | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `disabled` | `boolean`           | `-`     | When `true`, prevents the user from interacting with the component.                                                                                                                                                                     |
| `style`    | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"alert-dialog"`      |
| `[data-part]`     | `"action"`            |
| `[data-disabled]` | Present when disabled |

### Title

An accessible title to be announced when the alert dialog is opened. This component is based on the `h2` element.

| Prop             | Type                                     | Default | Description                                                                                                                                                                                                                             |
| ---------------- | ---------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`             | `FunctionComponent`                      | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `level`          | `"1" \| "2" \| "3" \| "4" \| "5" \| "6"` | `"2"`   | The level of the title, determines which tag will be used (h1-h6).                                                                                                                                                                      |
| `visuallyHidden` | `boolean`                                | `-`     | When `true`, title will be hide from the screen in an accessible way.                                                                                                                                                                   |
| `style`          | `CSSProperties`                          | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute | Values                                   |
| -------------- | ---------------------------------------- |
| `[data-scope]` | `"alert-dialog"`                         |
| `[data-part]`  | `"title"`                                |
| `[data-level]` | `"1" \| "2" \| "3" \| "4" \| "5" \| "6"` |

### Description

An accessible description to be announced when the alert dialog is opened. This component is based on the `p` element.

| Prop             | Type                | Default | Description                                                                                                                                                                                                                             |
| ---------------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`             | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `visuallyHidden` | `boolean`           | `-`     | When `true`, title will be hide from the screen in an accessible way.                                                                                                                                                                   |
| `style`          | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute | Values           |
| -------------- | ---------------- |
| `[data-scope]` | `"alert-dialog"` |
| `[data-part]`  | `"description"`  |

## Examples

### Initially open

The `AlertDialog.Content` component is based on
HTML `dialog` element. Opening or closing this component is only possible in the browser. There is no way to do it on the server side. For this reason, to get the effect of an initially opened Alert dialog, you need to use `useVisibleTask$`.

```tsx
import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { AlertDialog } from 'qwik-primitives';

const AlertDialogDemo = component$(() => {
  const isOpen = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    () => {
      isOpen.value = true;
    },
    { strategy: 'document-ready' }
  );

  return (
    <AlertDialog.Root open={isOpen} onOpenChange$={() => (isOpen.value = !isOpen.value)}>
      <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
        <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
```

### Initial focus

By default, when the component is opened, focus is programmatically moved to `AlertDialog.Cancel` to anticipate a response to the prompt. When `AlertDialog.Cancel` not exist or is disabled the focus will be move focus on the first focusable element. To specify the element that should receive initial focus, add `data-qwik-primitives-auto-focus` attribute on this element.

```tsx
import { component$ } from '@builder.io/qwik';
import { AlertDialog } from 'qwik-primitives';

const AlertDialogDemo = component$(() => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>

        <label for="first-input">First input</label>
        <input id="first-input" type="text" placeholder="First input" />

        <label for="second-input">Second input (will have initial focus)</label>
        <input
          data-qwik-primitives-auto-focus=""
          id="second-input"
          type="text"
          placeholder="Second input (will have initial focus)"
        />

        <label for="third-input">Third input</label>
        <input id="third-input" type="text" placeholder="Third input" />

        <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
```

### Restore focus

By default, focus will be restore back to the `AlertDialog.Trigger` when the alert dialog is closed. To specify the element that should receive focus after close alert dialog pass `restoreFocus={false}` on `AlertDialog.Content` component. You must also implement how you want and witch element should recive focus after deativate. Below you have example implementation.

```tsx
import { component$, useSignal, $ } from '@builder.io/qwik';
import { AlertDialog } from 'qwik-primitives';

const AlertDialogDemo = component$(() => {
  const restoreFocusElementRef = useSignal<HTMLButtonElement | undefined>(undefined);

  const handleClose$ = $(() => {
    // Using `setTimeout` is required, without it the element will not receive focus.
    setTimeout(() => {
      if (restoreFocusElementRef.value) {
        restoreFocusElementRef.value.focus();
      }
    });
  });

  return (
    <>
      <button ref={restoreFocusElementRef} type="button">
        Button (focus will be move on this element after close dialog)
      </button>

      <AlertDialog.Root>
        <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
        <AlertDialog.Content restoreFocus={false} onClose$={handleClose$}>
          <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
          <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
          <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
          <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
});
```

### Animations

Use `data-state` attribute to provide animations for the `AlertDialog.Content` component when alert dialog it opens/closes.

```tsx
// index.tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { AlertDialog } from 'qwik-primitives';
import styles from './styles.css?inline';

const AlertDialogDemo = component$(() => {
  useStyles$(styles);

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
      <AlertDialog.Content class="alert-dialog-content">
        <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
        <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
```

```css
/* styles.css */
.alert-dialog-content {
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

.alert-dialog-content[data-state='open'] {
  animation: alert-dialog-content-show 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.alert-dialog-content[data-state='closed'] {
  animation: alert-dialog-content-hide 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes alert-dialog-content-show {
  0% {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes alert-dialog-content-hide {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
}
```

### Style the overlay

Use the `::backdrop` CSS pseudo-element to style `AlertDialog.Content` component overlay. The overlay can also be animated. Firefox currently does not support backdrop animations. The fallback for browsers that do not support animated backdrops is the same as a non-animated backdrop.

```tsx
// index.tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { AlertDialog } from 'qwik-primitives';
import styles from './styles.css?inline';

const AlertDialogDemo = component$(() => {
  useStyles$(styles);

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
      <AlertDialog.Content class="alert-dialog-content">
        <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
        <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
```

```css
/* styles.css */
.alert-dialog-content::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

.alert-dialog-content[data-state='open']::backdrop {
  animation: alert-dialog-content-backdrop-show 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.alert-dialog-content[data-state='closed']::backdrop {
  animation: alert-dialog-content-backdrop-hide 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes alert-dialog-content-backdrop-show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes alert-dialog-content-backdrop-hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
```

## Accessibility

Adheres to the [Alert and Message Dialogs WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/).

### Keyboard Interactions

| Key           | Description                                                       |
| ------------- | ----------------------------------------------------------------- |
| `Space`       | Opens/closes the alert dialog.                                    |
| `Enter`       | Opens/closes the alert dialog.                                    |
| `Tab`         | Moves focus to the next focusable element.                        |
| `Shift + Tab` | Moves focus to the previous focusable element.                    |
| `Esc`         | Closes the alert dialog and moves focus to `AlertDialog.Trigger`. |
