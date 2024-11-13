# Breadcrumbs

Show hierarchy and navigational context for a user's location within an application.

## Features

- Support for disabled breadcrumb links.

- Adheres to the [Breadcrumb WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/).

## Import

```tsx
import { Breadcrumbs } from 'qwik-primitives';
```

## Anatomy

Import the component and piece the parts together.

```tsx
import { component$ } from '@builder.io/qwik';
import { Breadcrumbs } from 'qwik-primitives';

const BreadcrumbsDemo = component$(() => {
  return (
    <Breadcrumbs.Root>
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link />
          <Breadcrumbs.Separator />
        </Breadcrumbs.Item>

        <Breadcrumbs.Item>
          <Breadcrumbs.Page />
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs.Root>
  );
});
```

## Usage

```tsx
import { component$ } from '@builder.io/qwik';
import { Breadcrumbs } from 'qwik-primitives';

const BreadcrumbsDemo = component$(() => {
  return (
    <Breadcrumbs.Root>
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Docs</Breadcrumbs.Link>
          <Breadcrumbs.Separator>{'>'}</Breadcrumbs.Separator>
        </Breadcrumbs.Item>

        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Components</Breadcrumbs.Link>
          <Breadcrumbs.Separator>{'>'}</Breadcrumbs.Separator>
        </Breadcrumbs.Item>

        <Breadcrumbs.Item>
          <Breadcrumbs.Page>Breadcrumbs</Breadcrumbs.Page>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs.Root>
  );
});
```

## API Reference

### Root

Contains all the parts of a breadcrumbs. This component is based on the `nav` element.

| Prop         | Type                | Default         | Description                                                                                                                                                                                                                             |
| ------------ | ------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`         | `FunctionComponent` | `-`             | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `aria-label` | `string`            | `"Breadcrumbs"` | The label of the breadcrumbs.                                                                                                                                                                                                           |
| `disabled`   | `boolean`           | `-`             | Whether the breadcrumbs are disabled.                                                                                                                                                                                                   |
| `style`      | `CSSProperties`     | `-`             | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"breadcrumbs"`       |
| `[data-part]`     | `"root"`              |
| `[data-disabled]` | Present when disabled |

### List

Contains the breadcrumbs items. This component is based on the `ol` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"breadcrumbs"`       |
| `[data-part]`     | `"list"`              |
| `[data-disabled]` | Present when disabled |

### Item

A breadcrumbs item. This component is based on the `li` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"breadcrumbs"`       |
| `[data-part]`     | `"item"`              |
| `[data-disabled]` | Present when disabled |

### Link

A breadcrumbs link. Should be nested inside `Breadcrumbs.Item`. This component is based on the `a` element.

| Prop       | Type                | Default | Description                                                                                                                                                                                                                             |
| ---------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`       | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `disabled` | `boolean`           | `-`     | Whether the link is disabled. Native navigation will be disabled, and the link will be exposed as disabled to assistive technology.                                                                                                     |
| `href`     | `string`            | `-`     | A URL to link to.                                                                                                                                                                                                                       |
| `style`    | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"breadcrumbs"`       |
| `[data-part]`     | `"link"`              |
| `[data-disabled]` | Present when disabled |

### Page

A component that represents the current page. Should be nested inside `Breadcrumbs.Item`. This component is based on the `span` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute | Values          |
| -------------- | --------------- |
| `[data-scope]` | `"breadcrumbs"` |
| `[data-part]`  | `"page"`        |

### Separator

Used to visually separate breadcrumbs items. Should be nested inside `Breadcrumbs.Item`. This component is based on the `span` element.

| Prop    | Type                | Default | Description                                                                                                                                                                                                                             |
| ------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`    | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `style` | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute    | Values                |
| ----------------- | --------------------- |
| `[data-scope]`    | `"breadcrumbs"`       |
| `[data-part]`     | `"separator"`         |
| `[data-disabled]` | Present when disabled |

## Examples

### Disabled

Use the `disabled` prop on `Breadcrumbs.Root` to disable all links while keeping it accessible for screen readers.

```tsx
import { component$ } from '@builder.io/qwik';
import { Breadcrumbs } from 'qwik-primitives';

const BreadcrumbsDemo = component$(() => {
  return (
    <Breadcrumbs.Root disabled={true}>
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Docs</Breadcrumbs.Link>
          <Breadcrumbs.Separator>{'>'}</Breadcrumbs.Separator>
        </Breadcrumbs.Item>

        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Components</Breadcrumbs.Link>
          <Breadcrumbs.Separator>{'>'}</Breadcrumbs.Separator>
        </Breadcrumbs.Item>

        <Breadcrumbs.Item>
          <Breadcrumbs.Page>Breadcrumbs</Breadcrumbs.Page>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs.Root>
  );
});
```

### Disabled link

Use the `disabled` prop on `Breadcrumbs.Link` to disable a link while keeping it accessible for screen readers.

```tsx
import { component$ } from '@builder.io/qwik';
import { Breadcrumbs } from 'qwik-primitives';

const BreadcrumbsDemo = component$(() => {
  return (
    <Breadcrumbs.Root>
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link disabled={true} href="#">
            Docs
          </Breadcrumbs.Link>
          <Breadcrumbs.Separator>{'>'}</Breadcrumbs.Separator>
        </Breadcrumbs.Item>

        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Components</Breadcrumbs.Link>
          <Breadcrumbs.Separator>{'>'}</Breadcrumbs.Separator>
        </Breadcrumbs.Item>

        <Breadcrumbs.Item>
          <Breadcrumbs.Page>Breadcrumbs</Breadcrumbs.Page>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs.Root>
  );
});
```

## Accessibility

Adheres to the [Breadcrumb WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/).

### Keyboard Interactions

| Key     | Description         |
| ------- | ------------------- |
| `Enter` | Activates the link. |
