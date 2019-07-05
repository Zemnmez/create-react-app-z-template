> **[example](../README.md)**

[Globals](../README.md) / [resize-observer-hook](resize_observer_hook.md) /

# External module: resize-observer-hook

### Index

#### Functions

* [useResizeObserver](resize_observer_hook.md#const-useresizeobserver)

## Functions

### `Const` useResizeObserver

▸ **useResizeObserver**(`Default?`: [ResizeObserverEntry](react_observer_hook.md#resizeobserverentry)): *[[ResizeObserverEntry](react_observer_hook.md#resizeobserverentry) | undefined, [callbackRef](react_observer_hook.md#callbackref)]*

*Defined in [useResizeObserver.tsx:26](https://github.com/Zemnmez/create-react-app-z-template/blob/8e59a59/src/useResizeObserver.tsx#L26)*

[useResizeObserver](resize_observer_hook.md#const-useresizeobserver) is a React hook exposing the functionality of
the [ResizeObserver][mdn: ResizeObserver] API, which is an efficient
way to tell when an element changes size.

The function returns two values in an array.

1. a [ResizeObserverEntry][mdn: ResizeObserverEntry] or `undefined`,
representing the current known size.

2.a React ref you can pass in the `ref={}` parameter to any
elements you want to track the size of.

#### example [useResizeObserver](example/src/useResizeObserver.js)

**Parameters:**

Name | Type |
------ | ------ |
`Default?` | [ResizeObserverEntry](react_observer_hook.md#resizeobserverentry) |

**Returns:** *[[ResizeObserverEntry](react_observer_hook.md#resizeobserverentry) | undefined, [callbackRef](react_observer_hook.md#callbackref)]*