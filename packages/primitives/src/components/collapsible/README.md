# Collapsible

An interactive component which expands/collapses a panel.

## Features

- Full keyboard navigation.

- Can be controlled or uncontrolled.

## Import

```tsx
import { Collapsible } from 'qwik-primitives';
```

## Anatomy

Import the component and piece the parts together.

```tsx
import { component$ } from '@builder.io/qwik';
import { Collapsible } from 'qwik-primitives';

const CollapsibleDemo = component$(() => {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger />
      <Collapsible.Panel>
        <Collapsible.Content />
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
```

## Usage

Collapsible component can be controlled or uncontrolled.

### Uncontrolled

```tsx
import { component$ } from '@builder.io/qwik';
import { Collapsible } from 'qwik-primitives';

const CollapsibleDemo = component$(() => {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger>Toggle</Collapsible.Trigger>
      <Collapsible.Panel>
        <Collapsible.Content>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium necessitatibus
          rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus molestiae hic doloremque.
          Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus magni recusandae voluptatem,
          mollitia illo tenetur eum enim blanditiis, nam pariatur vitae necessitatibus, illum adipisci sit reprehenderit
          quas odit. Recusandae quas totam accusamus esse deleniti asperiores voluptatibus natus ut, tempora expedita
          tempore corrupti minima quaerat autem aliquam quisquam quidem nostrum nesciunt neque. Excepturi, nostrum.
          Eveniet, placeat consequatur, eligendi dolor quibusdam illum blanditiis officia sed nesciunt quia ipsam
          veritatis odio illo. Optio, perferendis?
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
```

### Controlled

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { Collapsible } from 'qwik-primitives';

const CollapsibleDemo = component$(() => {
  const open = useSignal(false);

  return (
    <Collapsible.Root open={open}>
      <Collapsible.Trigger>Toggle</Collapsible.Trigger>
      <Collapsible.Panel>
        <Collapsible.Content>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium necessitatibus
          rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus molestiae hic doloremque.
          Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus magni recusandae voluptatem,
          mollitia illo tenetur eum enim blanditiis, nam pariatur vitae necessitatibus, illum adipisci sit reprehenderit
          quas odit. Recusandae quas totam accusamus esse deleniti asperiores voluptatibus natus ut, tempora expedita
          tempore corrupti minima quaerat autem aliquam quisquam quidem nostrum nesciunt neque. Excepturi, nostrum.
          Eveniet, placeat consequatur, eligendi dolor quibusdam illum blanditiis officia sed nesciunt quia ipsam
          veritatis odio illo. Optio, perferendis?
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
```

## API Reference

### Root

Contains all the parts of a collapsible. This component is based on the `div` element.

| Prop            | Type                           | Default | Description                                                                                                          |
| --------------- | ------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------- |
| `defaultOpen`   | `boolean`                      | `-`     | The open state of the collapsible when it is initially rendered. Use when you do not need to control its open state. |
| `open`          | `Signal<boolean>`              | `-`     | The controlled open state of the collapsible.                                                                        |
| `onOpenChange$` | `QRL<(open: boolean) => void>` | `-`     | Event handler called when the open state of the collapsible changes.                                                 |
| `disabled`      | `boolean`                      | `-`     | When `true`, prevents the user from interacting with the collapsible.                                                |

<!-- prettier-ignore -->
| Data attribute    | Values                |
| --- | --- |
| `[data-state]`    | `"open" \| "closed"`  |
| `[data-disabled]` | Present when disabled |

### Trigger

The button that toggles the collapsible. This component is based on the `button` element.

<!-- prettier-ignore -->
| Data attribute    | Values                |
| --- | --- |
| `[data-state]`    | `"open" \| "closed"`  |
| `[data-disabled]` | Present when disabled |

### Panel

The panel that expands/collapses. This component is based on the `div` element.

<!-- prettier-ignore -->
| Data attribute    | Values                |
| --- | --- |
| `[data-state]`    | `"open" \| "closed"`  |
| `[data-disabled]` | Present when disabled |

### Content

The component that contains the collapsible content. This component is based on the `div` element.

<!-- prettier-ignore -->
| Data attribute    | Values                |
| --- | --- |
| `[data-state]`    | `"open" \| "closed"`  |
| `[data-disabled]` | Present when disabled |

## Examples

### Animating panel size

Use the `grid-template-rows` CSS property with `0fr` or `1fr` value to animate the size of the panel when it opens/closes. Here's a demo:

```tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { Collapsible } from 'qwik-primitives';

const CollapsibleDemo = component$(() => {
  useStyles$(`
		.collapsible-panel[data-state='open'] {
			animation: collapsible-panel-down 300ms ease-out;
		}
		
		.collapsible-panel[data-state='closed'] {
			animation: collapsible-panel-up 300ms ease-out;
		}
		
		.collapsible-content {
			overflow: hidden;
		}
		
		@keyframes collapsible-panel-down {
			0% {
				grid-template-rows: 0fr;
			}
			100% {
				grid-template-rows: 1fr;
			}
		}
		
		@keyframes collapsible-panel-up {
			0% {
				grid-template-rows: 1fr;
			}
			100% {
				grid-template-rows: 0fr;
			}
		}
	`);

  return (
    <Collapsible.Root>
      <Collapsible.Trigger>Toggle</Collapsible.Trigger>
      <Collapsible.Panel class="collapsible-panel">
        <Collapsible.Content class="collapsible-content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, aut voluptatibus laudantium necessitatibus
          rerum animi vel recusandae consequatur eligendi pariatur eius veniam itaque natus molestiae hic doloremque.
          Laborum eaque pariatur velit veniam ad? Qui consectetur vel eius voluptatibus magni recusandae voluptatem,
          mollitia illo tenetur eum enim blanditiis, nam pariatur vitae necessitatibus, illum adipisci sit reprehenderit
          quas odit. Recusandae quas totam accusamus esse deleniti asperiores voluptatibus natus ut, tempora expedita
          tempore corrupti minima quaerat autem aliquam quisquam quidem nostrum nesciunt neque. Excepturi, nostrum.
          Eveniet, placeat consequatur, eligendi dolor quibusdam illum blanditiis officia sed nesciunt quia ipsam
          veritatis odio illo. Optio, perferendis?
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
});
```

## Accessibility

Adheres to the Disclosure [Disclosure WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/).

### Keyboard Interactions

<!-- prettier-ignore -->
| Key     | Description                   |
| --- | --- |
| `Space` | Opens/closes the collapsible. |
| `Enter` | Opens/closes the collapsible. |
