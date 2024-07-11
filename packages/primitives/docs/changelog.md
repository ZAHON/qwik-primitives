# Changelog

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
