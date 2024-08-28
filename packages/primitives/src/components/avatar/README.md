# Avatar

An image element with a fallback for representing the user.

## Features

- Automatic and manual control over when the image renders.

- Optionally delay fallback rendering to avoid content flashing.

## Import

```tsx
import { Avatar } from 'qwik-primitives';
```

## Anatomy

Import all parts and piece them together.

```tsx
import { component$ } from '@builder.io/qwik';
import { Avatar } from 'qwik-primitives';

const AvatarDemo = component$(() => {
  return (
    <Avatar.Root>
      <Avatar.Image />
      <Avatar.Fallback />
    </Avatar.Root>
  );
});
```

## Usage

```tsx
import { component$ } from '@builder.io/qwik';
import { Avatar } from 'qwik-primitives';

const AvatarDemo = component$(() => {
  return (
    <Avatar.Root>
      <Avatar.Image
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <Avatar.Fallback>CT</Avatar.Fallback>
    </Avatar.Root>
  );
});
```

## API Reference

### Root

Contains all the parts of an avatar. This component is based on the `span` element.

| Prop       | Type                                                             | Default                   | Description                                                                                                                                                                                                                                                                                                      |
| ---------- | ---------------------------------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`       | `FunctionComponent`                                              | `-`                       | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.                                                                          |
| `strategy` | `"intersection-observer" \| "document-ready" \| "document-idle"` | `"intersection-observer"` | The strategy to use to determine when the image should load. `"intersection-observer"` means that image will load when the element is visible in the viewport. `"document-ready"` means that image will load when the document is ready. `"document-idle"` means that image will load when the document is idle. |
| `style`    | `CSSProperties`                                                  | `-`                       | The inline style for the element.                                                                                                                                                                                                                                                                                |

### Image

The image to render. By default it will only render when it has loaded. You can use the `onLoadingStatusChange$` handler if you need more control. This component is based on the `img` element.

| Prop                     | Type                                                                | Default | Description                                                                                                                                                                                                                             |
| ------------------------ | ------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`                     | `FunctionComponent`                                                 | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `onLoadingStatusChange$` | `QRL<(status: "idle" \| "loading" \| "loaded" \| "error") => void>` | `-`     | A callback providing information about the loading status of the image. This is useful in case you want to control more precisely what to render as the image is loading.                                                               |
| `style`                  | `CSSProperties`                                                     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

### Fallback

An element that renders when the image hasn't loaded. This means whilst it's loading, or if there was an error. If you notice a flash during loading, you can provide a `delayMs` prop to delay its rendering so it only renders for those with slower connections. For more control, use the `onLoadingStatusChange$` handler on `Avatar.Image`. This component is based on the `span` element.

| Prop      | Type                | Default | Description                                                                                                                                                                                                                             |
| --------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`      | `FunctionComponent` | `-`     | Change the default rendered element for the one passed as, merging their props and behavior. Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details. |
| `delayMs` | `number`            | `-`     | Useful for delaying rendering so it only appears for those with slower connections.                                                                                                                                                     |
| `style`   | `CSSProperties`     | `-`     | The inline style for the element.                                                                                                                                                                                                       |

## Examples

### Avoid flash during loading

By default `Avatar.Fallback` will render when the image hasn't loaded. This means whilst it's loading, or if there was an error.

If you notice a flash during loading, use the `delayMs` prop to delay its rendering, so it only renders for those with slower internet connections.

```tsx
import { component$ } from '@builder.io/qwik';
import { Avatar } from 'qwik-primitives';

const AvatarDemo = component$(() => {
  return (
    <Avatar.Root>
      <Avatar.Image
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
    </Avatar.Root>
  );
});
```
