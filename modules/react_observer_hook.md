> **[example](../README.md)**

[Globals](../README.md) / [react-observer-hook](react_observer_hook.md) /

# External module: react-observer-hook

### Index

#### Type aliases

* [ClientRect](react_observer_hook.md#clientrect)
* [DOMRect](react_observer_hook.md#domrect)
* [IntersectionObserverEntry](react_observer_hook.md#intersectionobserverentry)
* [IntersectionObserverInit](react_observer_hook.md#intersectionobserverinit)
* [ResizeObserverEntry](react_observer_hook.md#resizeobserverentry)
* [callbackRef](react_observer_hook.md#callbackref)

#### Functions

* [useIntersectionObserver](react_observer_hook.md#const-useintersectionobserver)
* [useMutationObserver](react_observer_hook.md#const-usemutationobserver)

## Type aliases

###  ClientRect

Ƭ **ClientRect**: *object*

*Defined in [declarations.tsx:9](https://github.com/Zemnmez/create-react-app-z-template/blob/8e59a59/src/declarations.tsx#L9)*

A [ClientRect](react_observer_hook.md#clientrect) represents the bounding box of the client (i.e. window)
of the browser.

#### Type declaration:

* **bottom**: *number*

* **height**: *number*

* **left**: *number*

* **right**: *number*

* **top**: *number*

* **width**: *number*

___

###  DOMRect

Ƭ **DOMRect**: *object*

*Defined in [declarations.tsx:21](https://github.com/Zemnmez/create-react-app-z-template/blob/8e59a59/src/declarations.tsx#L21)*

A [DOMRect](react_observer_hook.md#domrect) represents the bounding box of an Element.

#### Type declaration:

* **height**: *number*

* **width**: *number*

* **x**: *number*

* **y**: *number*

___

###  IntersectionObserverEntry

Ƭ **IntersectionObserverEntry**: *object*

*Defined in [declarations.tsx:32](https://github.com/Zemnmez/create-react-app-z-template/blob/8e59a59/src/declarations.tsx#L32)*

[IntersectionObserverEntry](react_observer_hook.md#intersectionobserverentry) represents the information given by
an intersection event from a [useIntersectionObserver](react_observer_hook.md#const-useintersectionobserver)

#### Type declaration:

* **boundingClientRect**: *[ClientRect](react_observer_hook.md#clientrect) | [DOMRect](react_observer_hook.md#domrect)*

* **intersectionRatio**: *number*

* **intersectionRect**: *[ClientRect](react_observer_hook.md#clientrect) | [DOMRect](react_observer_hook.md#domrect)*

* **isIntersecting**: *boolean*

* **rootBounds**: *[ClientRect](react_observer_hook.md#clientrect) | [DOMRect](react_observer_hook.md#domrect)*

* **target**: *`Element`*

* **time**: *number*

___

###  IntersectionObserverInit

Ƭ **IntersectionObserverInit**: *object*

*Defined in [declarations.tsx:67](https://github.com/Zemnmez/create-react-app-z-template/blob/8e59a59/src/declarations.tsx#L67)*

[IntersectionObserverInit](react_observer_hook.md#intersectionobserverinit) are the initialization configuration options
for [useIntersectionObserver](react_observer_hook.md#const-useintersectionobserver).

> rootMargin

A string which specifies a set of offsets to add
to the root's bounding_box when calculating intersections,
effectively shrinking or growing the root for calculation purposes.

The syntax is approximately the same as that for the CSS `margin` property.
The default is "0px 0px 0px 0px"

> threshold

Either a single number or an array of numbers between 0.0 and 1.0,
specifying a ratio of intersection area to total bounding box area
for the observed target. A value of 0.0 means that even a single visible
pixel counts as the target being visible. 1.0 means that the entire
target element is visible. The default is a threshold of 0.0.

 @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#Parameters

#### Type declaration:

* **root**? : *`Element` | undefined*

* **rootMargin**? : *undefined | string*

* **threshold**? : *number | number[]*

___

###  ResizeObserverEntry

Ƭ **ResizeObserverEntry**: *object*

*Defined in [declarations.tsx:150](https://github.com/Zemnmez/create-react-app-z-template/blob/8e59a59/src/declarations.tsx#L150)*

#### Type declaration:

* **contentRect**: *`DOMRectReadOnly`*

* **target**: *`Element`*

___

###  callbackRef

Ƭ **callbackRef**: *function*

*Defined in [declarations.tsx:142](https://github.com/Zemnmez/create-react-app-z-template/blob/8e59a59/src/declarations.tsx#L142)*

**`see`** https://reactjs.org/docs/refs-and-the-dom.html#callback-refs

#### Type declaration:

▸ (`element`: `Node`): *void*

**Parameters:**

Name | Type |
------ | ------ |
`element` | `Node` |

## Functions

### `Const` useIntersectionObserver

▸ **useIntersectionObserver**(`options?`: [IntersectionObserverInit](react_observer_hook.md#intersectionobserverinit)): *function*

*Defined in [useIntersectionObserver.tsx:74](https://github.com/Zemnmez/create-react-app-z-template/blob/8e59a59/src/useIntersectionObserver.tsx#L74)*

[useIntersectionObserver](react_observer_hook.md#const-useintersectionobserver) is a React hook exposing the functionality of the
[IntersectionObserver][mdn: IntersectionObserver] API, which is an efficient way to
tell when an element becomes visible within some viewport, which could be
the parent window, or the containing element.

This function returns a factory function, which when called returns two values in an array:

1. An [IntersectionObserverEntry][mdn: IntersectionObserverEntry], or `undefined` representing
details on how the children were modified.

2. A [React ref][react docs: react ref] that you can pass in the `ref={}`
parameter to any elements you want to track child changes for.

This factory type construction allows you to pass your useIntersectionObserver value
any number to children that you want to intersect with you.

[mdn: IntersectionObserver]: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver "MDN docs: IntersectionObserver"
[mdn: IntersectionObserverEntry]: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry "MDN docs: IntersectionObserverEntry"
[react docs: react ref]: https://reactjs.org/docs/refs-and-the-dom.html "React Docs: Refs and the DOM"

#### example [useIntersectionObserver](example/src/useIntersectionObserver.js)

```javascript
import React from 'react'
import { useIntersectionObserver } from 'react-observer-hook'

export default () => {
  const [{
    bindingClientRect: { width, height },
    intersectionRatio,
    intersectionRect,
    isIntersecting,
    rootBounds,
    target,
    time
  }, ref] = useResizeObserver()

  return <React.Fragment>
    <textarea ref={ref}>
      Resize me!!
  </textarea>
  <table> <thead><tr><td>param,</td><td>value</td></tr></thead>
  <tbody>
      {Object.entries({
        width, height, intersectionRatio, intersectionRect,
        isIntersecting, rootBounds, target, time
      }).map(([k,v]) => <tr><td>{k}</td><td>{v}</td></tr>)}
  </tbody></table>
  </React.Fragment>

}

```

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [IntersectionObserverInit](react_observer_hook.md#intersectionobserverinit) |

**Returns:** *function*

▸ (): *[[IntersectionObserverEntry](react_observer_hook.md#intersectionobserverentry) | undefined, [callbackRef](react_observer_hook.md#callbackref)]*

___

### `Const` useMutationObserver

▸ **useMutationObserver**(`Default?`: `MutationRecord`, `options?`: `MutationObserverInit`): *[`MutationRecord` | undefined, [callbackRef](react_observer_hook.md#callbackref)]*

*Defined in [useMutationObserver.tsx:52](https://github.com/Zemnmez/create-react-app-z-template/blob/8e59a59/src/useMutationObserver.tsx#L52)*

[useMutationObserver](react_observer_hook.md#const-usemutationobserver) is a React hook exposing the functionality of the
[MutationObserver][mdn: MutationObserver] API, which is an efficient way to
tell when the children of an element changes.

This function returns two values in an array:

1. A [MutationRecord][mdn: MutationRecord], or `undefined` representing
details on how the children were modified.

2. A [React ref][react docs: react ref] that you can pass in the `ref={}`
parameter to any elements you want to track child changes for.

[mdn: MutationObserver]: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver "MDN docs: MutationObserver"
[mdn: MutationRecord]: https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord "MDN docs: MutationRecord"
[react docs: react ref]: https://reactjs.org/docs/refs-and-the-dom.html "React Docs: Refs and the DOM"

#### example [useMutationObserver](example/src/useMutationObserver.js)

```javascript
import React from 'react'
import { useMutationObserver } from 'react-observer-hook'

export default () => {
  const [mutation, ref] = useMutationObserver()
  const childRef = React.useRef()
  const [text, setText] = React.useState("example")
  React.useEffect(() => {
    window.setTimeout(() => setText("text2"), 1000)
  }, [])

  return <div>

  <div ref={ref}>
    <div ref={childRef}>{text}</div>
  </div>

    changes to the DOM:
    {JSON.stringify(mutation)}

  </div>
}

```

**Parameters:**

Name | Type |
------ | ------ |
`Default?` | `MutationRecord` |
`options?` | `MutationObserverInit` |

**Returns:** *[`MutationRecord` | undefined, [callbackRef](react_observer_hook.md#callbackref)]*