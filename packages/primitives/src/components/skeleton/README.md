# Skeleton

Shows a placeholder for loading content.

## Features

- Supports customizable width, height, and shape to fit various UI elements.

- Offers manual control over visibility and rendering duration.

## Import

```tsx
import { Skeleton } from 'qwik-primitives';
```

## Anatomy

Import all parts and piece them together.

```tsx
import { component$ } from '@builder.io/qwik';
import { Skeleton } from 'qwik-primitives';

const SkeletonDemo = component$(() => {
  return (
    <Skeleton.Root>
      <Skeleton.Content />
      <Skeleton.Fallback />
    </Skeleton.Root>
  );
});
```

## Usage

```tsx
import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Skeleton } from 'qwik-primitives';

const SkeletonDemo = component$(() => {
  const isLoading = useSignal(true);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 5000);
  });

  return (
    <Skeleton.Root loading={isLoading.value}>
      <Skeleton.Content>
        {!isLoading.value && (
          <p style={{ height: '6rem', overflow: 'hidden' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sunt, cumque praesentium qui nobis
            tenetur aliquam repellendus neque dicta ipsam reprehenderit dolores voluptas architecto blanditiis vel,
            exercitationem at. Natus, aliquam!
          </p>
        )}
      </Skeleton.Content>

      <Skeleton.Fallback style={{ height: '6rem', backgroundColor: 'purple' }} />
    </Skeleton.Root>
  );
});
```

## API Reference

### Root

Contains all the parts of a skeleton. By default, it will be rendered with the passed children only if the `loading` prop is set to `true` otherwise the component will render the passed children. Use the `forceMount` prop to always render this component with the passed children. This component is based on the `div` element.

| Prop         | Type                | Default | Description                                                                                                                                                                                                                             |
| ------------ | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`         | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `loading`    | `boolean`           | `-`     | Toggles whether to hide the content and display the fallback.                                                                                                                                                                           |
| `forceMount` | `boolean`           | `-`     | Used to force mounting when more control is needed.                                                                                                                                                                                     |
| `style`      | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute       | Values                                    |
| -------------------- | ----------------------------------------- |
| `[data-scope]`       | `"skeleton"`                              |
| `[data-part]`        | `"root"`                                  |
| `[data-loading]`     | Present when the skeleton is loading      |
| `[data-force-mount]` | Present when the component is force mount |

### Content

Contains loading content. By default, it will be rendered with the passed children only if the `loading` prop is set to `true` on `Skeleton.Root` component otherwise the component will render the passed children. Use the `forceMount` prop to always render this component with the passed children. This component is based on the `div` element.

| Prop         | Type                | Default | Description                                                                                                                                                                                                                             |
| ------------ | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`         | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `forceMount` | `boolean`           | `-`     | Used to force mounting when more control is needed.                                                                                                                                                                                     |
| `style`      | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute       | Values                                  |
| -------------------- | --------------------------------------- |
| `[data-scope]`       | `"skeleton"`                            |
| `[data-part]`        | `"content"`                             |
| `[data-loading]`     | Present when the skeleton is loading    |
| `[data-force-mount]` | Present when the content is force mount |

### Fallback

Contains alternate content while the actual content has not yet been loaded. By default, it will render only when the `loading` prop is set to `true` on `Skeleton.Root component,` use the `forceMount` prop to always render this component. This component is based on the `div` element.

| Prop         | Type                | Default | Description                                                                                                                                                                                                                             |
| ------------ | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`         | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `forceMount` | `boolean`           | `-`     | Used to force mounting when more control is needed.                                                                                                                                                                                     |
| `style`      | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

| Data attribute       | Values                                   |
| -------------------- | ---------------------------------------- |
| `[data-scope]`       | `"skeleton"`                             |
| `[data-part]`        | `"fallback"`                             |
| `[data-loading]`     | Present when the skeleton is loading     |
| `[data-force-mount]` | Present when the fallback is force mount |

## Examples

### With content that is already on page

If you want to indicate the loading state of content that is already on page, wrap it with `Skeleton.Content` and control `Skeleton.Fallback` visibility with `loading` prop.

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import { Skeleton } from 'qwik-primitives';

const SkeletonDemo = component$(() => {
  const isLoading = useSignal(false);

  return (
    <>
      <Skeleton.Root loading={isLoading.value}>
        <Skeleton.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sunt, cumque praesentium qui nobis
            tenetur aliquam repellendus neque dicta ipsam reprehenderit dolores voluptas architecto blanditiis vel,
            exercitationem at. Natus, aliquam!
          </p>
        </Skeleton.Content>

        <Skeleton.Fallback style={{ backgroundColor: 'purple' }} />
      </Skeleton.Root>

      <button type="button" onClick$={() => (isLoading.value = !isLoading.value)}>
        Toggle content
      </button>
    </>
  );
});
```
