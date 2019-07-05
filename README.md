> **[example](README.md)**

[Globals]() / [example](README.md) /

**`requires`** prop-types

**`requires`** react

**`requires`** react-dom

**`summary`** an example description

**`version`** 1.0.0

**`author`** an example author

**`copyright`** an example author 2019

**`license`** MIT
## Installation

```bash
yarn add example
```
# Abstract
This package provides type checked React hooks for the observer APIs. The Observer APIs are efficient, browser supported ways
of querying changes to an element's size, position, visibility and changes over time. It should be easy to
use this package to react to these changes without complicated state management or performance downsides.

The types used to typecheck this package are imported from the mainline typescript DefinitelyTyped libraries.
If these APIs change in a way that no longer conforms to these definitions, the package should stop building
rather than create subtle run time errors.

| export | purpose | API  |
|--------|---------|------|
| [useIntersectionObserver](README.md#const-useintersectionobserver) | Detect when an element becomes all or partially visible or invisible and is scrolled into view | [IntersectionObserver][mdn: IntersectionObserver] |
| [useResizeObserver](README.md#const-useresizeobserver) | Detect when an element changes size (due to CSS or otherwise) | [ResizeObserver][mdn: ResizeObserver] |
| [useMutationObserver](README.md#const-usemutationobserver) | Detect when the children of an element are modified | [MutationObserver][mdn: MutationObserver] |

[mdn: IntersectionObserver]: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API "Mozilla Developer Network: IntersectionObserver"
[mdn: MutationObserver]: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver "Mozilla Developer Network: MutationObserver"
[mdn: ResizeObserver]: https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver "Mozilla Developer Network: ResizeObserver"

### Index

#### Type aliases

* [ClientRect](README.md#clientrect)
* [DOMRect](README.md#domrect)
* [IntersectionObserverEntry](README.md#intersectionobserverentry)
* [IntersectionObserverInit](README.md#intersectionobserverinit)
* [ResizeObserverEntry](README.md#resizeobserverentry)
* [callbackRef](README.md#callbackref)

#### Functions

* [useIntersectionObserver](README.md#const-useintersectionobserver)
* [useMutationObserver](README.md#const-usemutationobserver)
* [useResizeObserver](README.md#const-useresizeobserver)

## Type aliases

###  ClientRect

Ƭ **ClientRect**: *object*

*Defined in [declarations.tsx:9](https://github.com/Zemnmez/create-react-app-z-template/blob/ece1402/src/declarations.tsx#L9)*

A [ClientRect](README.md#clientrect) represents the bounding box of the client (i.e. window)
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

*Defined in [declarations.tsx:21](https://github.com/Zemnmez/create-react-app-z-template/blob/ece1402/src/declarations.tsx#L21)*

A [DOMRect](README.md#domrect) represents the bounding box of an Element.

#### Type declaration:

* **height**: *number*

* **width**: *number*

* **x**: *number*

* **y**: *number*

___

###  IntersectionObserverEntry

Ƭ **IntersectionObserverEntry**: *object*

*Defined in [declarations.tsx:32](https://github.com/Zemnmez/create-react-app-z-template/blob/ece1402/src/declarations.tsx#L32)*

[IntersectionObserverEntry](README.md#intersectionobserverentry) represents the information given by
an intersection event from a [useIntersectionObserver](README.md#const-useintersectionobserver)

#### Type declaration:

* **boundingClientRect**: *[ClientRect](README.md#clientrect) | [DOMRect](README.md#domrect)*

* **intersectionRatio**: *number*

* **intersectionRect**: *[ClientRect](README.md#clientrect) | [DOMRect](README.md#domrect)*

* **isIntersecting**: *boolean*

* **rootBounds**: *[ClientRect](README.md#clientrect) | [DOMRect](README.md#domrect)*

* **target**: *`Element`*

* **time**: *number*

___

###  IntersectionObserverInit

Ƭ **IntersectionObserverInit**: *object*

*Defined in [declarations.tsx:67](https://github.com/Zemnmez/create-react-app-z-template/blob/ece1402/src/declarations.tsx#L67)*

[IntersectionObserverInit](README.md#intersectionobserverinit) are the initialization configuration options
for [useIntersectionObserver](README.md#const-useintersectionobserver).

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

*Defined in [declarations.tsx:150](https://github.com/Zemnmez/create-react-app-z-template/blob/ece1402/src/declarations.tsx#L150)*

#### Type declaration:

* **contentRect**: *`DOMRectReadOnly`*

* **target**: *`Element`*

___

###  callbackRef

Ƭ **callbackRef**: *function*

*Defined in [declarations.tsx:142](https://github.com/Zemnmez/create-react-app-z-template/blob/ece1402/src/declarations.tsx#L142)*

**`see`** https://reactjs.org/docs/refs-and-the-dom.html#callback-refs

#### Type declaration:

▸ (`element`: `Node`): *void*

**Parameters:**

Name | Type |
------ | ------ |
`element` | `Node` |

## Functions

### `Const` useIntersectionObserver

▸ **useIntersectionObserver**(`options?`: [IntersectionObserverInit](README.md#intersectionobserverinit)): *function*

*Defined in [useIntersectionObserver.tsx:49](https://github.com/Zemnmez/create-react-app-z-template/blob/ece1402/src/useIntersectionObserver.tsx#L49)*

[useIntersectionObserver](README.md#const-useintersectionobserver) is a React hook exposing the functionality of the
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

```javascript
hello??

```

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [IntersectionObserverInit](README.md#intersectionobserverinit) |

**Returns:** *function*

▸ (): *[[IntersectionObserverEntry](README.md#intersectionobserverentry) | undefined, [callbackRef](README.md#callbackref)]*

___

### `Const` useMutationObserver

▸ **useMutationObserver**(`Default?`: `MutationRecord`, `options?`: `MutationObserverInit`): *[`MutationRecord` | undefined, [callbackRef](README.md#callbackref)]*

*Defined in [useMutationObserver.tsx:52](https://github.com/Zemnmez/create-react-app-z-template/blob/ece1402/src/useMutationObserver.tsx#L52)*

[useMutationObserver](README.md#const-usemutationobserver) is a React hook exposing the functionality of the
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

**Returns:** *[`MutationRecord` | undefined, [callbackRef](README.md#callbackref)]*

___

### `Const` useResizeObserver

▸ **useResizeObserver**(`Default?`: [ResizeObserverEntry](README.md#resizeobserverentry)): *[[ResizeObserverEntry](README.md#resizeobserverentry) | undefined, [callbackRef](README.md#callbackref)]*

*Defined in [useResizeObserver.tsx:26](https://github.com/Zemnmez/create-react-app-z-template/blob/ece1402/src/useResizeObserver.tsx#L26)*

[useResizeObserver](README.md#const-useresizeobserver) is a React hook exposing the functionality of
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
`Default?` | [ResizeObserverEntry](README.md#resizeobserverentry) |

**Returns:** *[[ResizeObserverEntry](README.md#resizeobserverentry) | undefined, [callbackRef](README.md#callbackref)]*