# Changelog

## 0.0.16

### 🚀 Features

- `AccessibleIcon` component

  - Add `data-qwik-primitives-accessible-icon-*` data attribute for all the parts of a component.

  - Change component export structure.

- `Alert` component

  - Add `data-qwik-primitives-alert-root` data attribute for component.

  - Change component export structure.

- `Breadcrumbs` component

  - Add ability to disabled component during browser runtime.

  - Add `data-qwik-primitives-breadcrumbs-*` data attribute for all the parts of a component.

  - Add attribute `data-disabled` for `Breadcrumbs.Root`, `Breadcrumbs.List`, `Breadcrumbs.Item`, `Breadcrumbs.Page` and `Breadcrumbs.Separator` components that presents when `Breadcrumbs.Root` component is disabled.

  - Remove attribute `role` with value `"presentation"` from `Breadcrumbs.Separator` component.

  - Change component export structure.

- `Collapsible` component

  - Add ability to disabled component during browser runtime.

  - Add ability to provide own `id` attribute for `Collapsible.Panel` component. The custom identifier will be automatically bound to the `Collapsible.Trigger` component via the `aria-controls` attribute.

  - Add `data-qwik-primitives-collapsible-*` data attribute for all the parts of a component.

  - Change component export structure.

- `Label` component

  - Add `data-qwik-primitives-label-root` data attribute for component.

  - Change component export structure.

- `Link` component

  - Add ability to disabled component during browser runtime.

  - Add `data-qwik-primitives-link-root` data attribute for component.

  - Change component export structure.

- `VisuallyHidden` component

  - Add `data-qwik-primitives-visually-hidden-root` data attribute for component.

  - Change component export structure.

## 0.0.15

### 🚀 Features

- Add `Label` component.

## 0.0.14

### 🚀 Features

- Add `AccessibleIcon` component.

## 0.0.13

### 🚨 Breaking Changes

- Remove `addEventListenerOnce` utility function.

- Change `useControllableState` hook api.

- Refactor `Collapsible` component.

## 0.0.12

### 🚀 Features

- Add `Alert` component.

## 0.0.11

### 🚀 Features

- Add `VisuallyHidden` component.

## 0.0.10

### 🚀 Features

- Add `Primitive` component.

## 0.0.9

### 🚀 Features

- Add `Breadcrumbs` component.

## 0.0.8

### 🚀 Features

- Add `Link` component.

## 0.0.7

### 🚨 Breaking Changes

- Remove `mergeStyles` utility function.

### 🚀 Features

- Add `style` prop with type `CSSProperties` to all parts of the `Collapsible` component.

## 0.0.6

### 🚨 Breaking Changes

- Change `composeRefs` utility function API. From now on, the function takes an array as an argument.

### 🚀 Features

- Add `mergeStyles` utility function. This function allow merge array of style into one style object.

### 🐞 Bug Fixes

- Change event handlers order in `onClick$` attribute inside `Collapsible.Trigger` component implementation. From now event handlers passed to the component will be called first.

- Add a condition in the `handleClick$` event handler of the `Collapsible.Trigger` component to avoid calling the code when the `Collapsible` component is `disabled`. This change prevents expansion and collapse
  panel when the `Collapsible` component is uncontrolled and the default rendered element of the `Collapsible.Trigger` component has been changed using `as` prop.

## 0.0.5

### 🚀 Features

- Add `as` prop to all parts of the `Collapsible` component.

## 0.0.4

### 🚀 Features

- Add `Collapsible` component.

## 0.0.3

### 🚀 Features

- Add `addEventListenerOnce` utility function.

## 0.0.2

### 🚀 Features

- Add `composeRefs` utility function.

## 0.0.1

### 🚀 Features

- Add `useControllableState` hook.
