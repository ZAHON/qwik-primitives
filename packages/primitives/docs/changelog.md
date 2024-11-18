# Changelog

## 0.0.29

### 🚀 Features

- Add `Accordion` component.

- Refactor internal implementation for all components, remove unnecessary use `useComputed$` hook.

### 🚨 Breaking Changes

- Remove `visuallyHiddenStyle` utility.

- Remove `findFirstVisibleElement` utility function.

- Remove `focusElement` utility function.

- Remove `focusFirstElement` utility function.

- Remove `getTabbableCandidates` utility function.

### 🚀 Features

## 0.0.28

### 🚀 Features

- Add `Heading` component.

- `Separator` component

  - `Separator.Root` component

    - Add `data-qwik-primitives-separator-root` attribute with empty value.

    - Add `data-scope` attribute with value `"separator"`.

    - Add `data-part` attribute with value `"root"`.

- `Dialog` component

  - `Dialog.Title` component

    - Add `level` prop that allow to change the level of the title, determines which tag will be used (h1-h6).

    - Add `data-level` attribute witch have value affiliated with value pass `level` prop.

- `AlertDialog` component

  - `AlertDialog.Title` component

    - Add `level` prop that allow to change the level of the title, determines which tag will be used (h1-h6).

    - Add `data-level` attribute witch have value affiliated with value pass `level` prop.

- `Popover` component

  - `Popover.Title` component

    - Add `level` prop that allow to change the level of the title, determines which tag will be used (h1-h6).

    - Add `data-level` attribute witch have value affiliated with value pass `level` prop.

## 0.0.27

### 🚀 Features

- Add `Spoiler` component.

- Improve `Popover` component combatibility with others component that uses top layer.

- Improve `Dialog` component combatibility with others component that uses top layer.

- Improve `AlertDialog` component combatibility with others component that uses top layer.

### 🐞 Bug Fixes

- Fix browser freez in some cases when use `useFocusTrap` hook.

## 0.0.26

### 🚀 Features

- Add `Separator` component.

## 0.0.25

### 🚀 Features

- Add `Tabs` component.

## 0.0.24

### 🚀 Features

- Add `Popover` component.

- Integrate `Dialog` component with others components that use top layer.

- Integrate `AlertDialog` component with others components that use top layer.

## 0.0.23

### 🚀 Features

- Add `CopyButton` component.

## 0.0.22

### 🚀 Features

- Add `Spinner` component.

## 0.0.21

### 🚀 Features

- Add `AlertDialog` component.

- Improve `composeRefs` utility function to works with components provided by `as` prop.

- `useFocusTrap` hook

  - Add `autoFocus` option. This option allow to enable or disable auto focus the first focusable element in the focus trap when is active.

  - Add `restoreFocus` option. This option allow to manage restore focus back to the element that was focused when the focus trap activated, after the focus trap is deactivate.

- `Dialog` component

  - `Dialog.Trigger` component

    - Add `data-scope` attribute with value `"dialog"`.

    - Add `data-part` attribute with value `"trigger"`.

    - Add `data-disabled` attribute that presents when component is disabled.

  - `Dialog.Content` component

    - Add `loop` prop that allow to control focus loop inside component.

    - Add `autoFocus` prop that allow control whether to auto focus the first focusable element in the component when it's opened.

    - Add `restoreFocus` prop that allow to control whether to restore focus back to the `Dialog.Trigger` when the dialog is closed.

    - Add `closeOnBackPress` prop that allow to control whether to close the dialog when the back is press on mobile devices.

    - Add `data-scope` attribute with value `"dialog"`.

    - Add `data-part` attribute with value `"content"`.

  - `Dialog.Close` component

    - Add `data-scope` attribute with value `"dialog"`.

    - Add `data-part` attribute with value `"close"`.

    - Add `data-disabled` attribute that presents when component is disabled.

  - `Dialog.Title` component

    - Add `data-scope` attribute with value `"dialog"`.

    - Add `data-part` attribute with value `"title"`.

  - `Dialog.Description` component

    - Add `data-scope` attribute with value `"dialog"`.

    - Add `data-part` attribute with value `"description"`.

- `Alert` component

  - `Alert.Root` component

    - Add `data-scope` attribute with value `"alert"`.

    - Add `data-part` attribute with value `"root"`.

- `Avatar` component

  - `Avatar.Root` component

    - Add `data-scope` attribute with value `"avatar"`.

    - Add `data-part` attribute with value `"root"`.

  - `Avatar.Image` component

    - Add `data-scope` attribute with value `"avatar"`.

    - Add `data-part` attribute with value `"image"`.

  - `Avatar.Fallback` component

    - Add `data-scope` attribute with value `"avatar"`.

    - Add `data-part` attribute with value `"fallback"`.

- `Breadcrumbs` component

  - `Breadcrumbs.Root` component

    - Add `data-scope` attribute with value `"breadcrumbs"`.

    - Add `data-part` attribute with value `"root"`.

  - `Breadcrumbs.List` component

    - Add `data-scope` attribute with value `"breadcrumbs"`.

    - Add `data-part` attribute with value `"list"`.

  - `Breadcrumbs.Item` component

    - Add `data-scope` attribute with value `"breadcrumbs"`.

    - Add `data-part` attribute with value `"item"`.

  - `Breadcrumbs.Link` component

    - Add `data-scope` attribute with value `"breadcrumbs"`.

    - Add `data-part` attribute with value `"link"`.

  - `Breadcrumbs.Page` component

    - Add `data-scope` attribute with value `"breadcrumbs"`.

    - Add `data-part` attribute with value `"page"`.

  - `Breadcrumbs.Separator` component

    - Add `data-scope` attribute with value `"breadcrumbs"`.

    - Add `data-part` attribute with value `"separator"`.

- `Collapsible` component

  - `Collapsible.Root` component

    - Add `data-scope` attribute with value `"collapsible"`.

    - Add `data-part` attribute with value `"root"`.

  - `Collapsible.Trigger` component

    - Add `data-scope` attribute with value `"collapsible"`.

    - Add `data-part` attribute with value `"trigger"`.

  - `Collapsible.Panel` component

    - Add `data-scope` attribute with value `"collapsible"`.

    - Add `data-part` attribute with value `"panel"`.

  - `Collapsible.Content` component

    - Add `data-scope` attribute with value `"collapsible"`.

    - Add `data-part` attribute with value `"content"`.

- `Label` component

  - `Label.Root` component

    - Add `data-scope` attribute with value `"label"`.

    - Add `data-part` attribute with value `"root"`.

- `Link` component

  - `Link.Root` component

    - Add `data-scope` attribute with value `"link"`.

    - Add `data-part` attribute with value `"root"`.

- `Toggle` component

  - `Toggle.Root` component

    - Add `data-scope` attribute with value `"toggle"`.

    - Add `data-part` attribute with value `"root"`.

- `VisuallyHidden` component

  - `VisuallyHidden.Root` component

    - Add `data-scope` attribute with value `"visually-hidden"`.

    - Add `data-part` attribute with value `"root"`.

### 🚨 Breaking Changes

- Remove `trapFocus` prop from `Dialog.Content` component.

- Remove `AccessibleIcon` component.

- Remove `external` prop from `Link.Root` component.

### 🐞 Bug Fixes

- Fix a problem in Firefox where when the user clicked the `option` of a `select` element inside an open `Dialog.Content` component when `closeOnClickOutside` prop is set to `true`. In that case the `Dialog` component would be closed.

## 0.0.20

### 🚀 Features

- Change `Primitive` component export structure.

- Add `Toggle` component.

## 0.0.19

### 🚀 Features

- Add `Avatar` component.

## 0.0.18

### 🚀 Features

- Add a condition checking if the element has a `tabIndex` attribute with a value not equal to `-1` in `useFocusTrap`.

### 🚨 Breaking Changes

- Change `Dialog.Content` component prop name from `closeOnPointerDownOutside` to `closeOnClickOutside`.

- Change `Dialog.Content` component prop name from `onPointerDownOutside` to `onClickOutside`.

### 🐞 Bug Fixes

- Fix issue that occurs when first opening `Dialog` component.

- Fix issue when user click outside `Dialog` component.

## 0.0.17

### 🚀 Features

- Add `useFocusTrap` hook.

- Add `useScrollLock` hook.

- Add `visuallyHiddenStyle` utility.

- Add `Dialog` component.

- Use `visuallyHiddenStyle` utility in `VisuallyHidden.Root` component.

- Use `visuallyHiddenStyle` utility in `AccessibleIcon.Root` component.

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
