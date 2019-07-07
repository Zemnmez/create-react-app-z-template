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
| [[useIntersectionObserver]] | Detect when an element becomes all or partially visible or invisible and is scrolled into view | [IntersectionObserver][mdn: IntersectionObserver] |
| [[useResizeObserver]] | Detect when an element changes size (due to CSS or otherwise) | [ResizeObserver][mdn: ResizeObserver] |
| [[useMutationObserver]] | Detect when the children of an element are modified | [MutationObserver][mdn: MutationObserver] |

[mdn: IntersectionObserver]: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API "Mozilla Developer Network: IntersectionObserver"
[mdn: MutationObserver]: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver "Mozilla Developer Network: MutationObserver"
[mdn: ResizeObserver]: https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver "Mozilla Developer Network: ResizeObserver"

### Index

#### Type aliases

* [DOMRect](README.md#domrect)

#### Functions

* [Box](README.md#const-box)

## Type aliases

###  DOMRect

Ƭ **DOMRect**: *object*

*Defined in [declarations.tsx:8](https://github.com/Zemnmez/create-react-app-z-template/blob/401847f/src/declarations.tsx#L8)*

A [DOMRect](README.md#domrect) represents the bounding box of an Element.

#### Type declaration:

* **height**: *number*

* **width**: *number*

* **x**: *number*

* **y**: *number*

## Functions

### `Const` Box

▸ **Box**(`__namedParameters`: object): *`Element`*

*Defined in [box.tsx:16](https://github.com/Zemnmez/create-react-app-z-template/blob/401847f/src/box.tsx#L16)*

A [Box](README.md#const-box) draws a rectangle of given size.

**example**
```javascript
import React from 'react';
import { Box } from 'example';

export const BoxExample = () => <Box {...{
  height: 100,
  width: 100,
}}/>

```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`height` | number |
`width` | number |

**Returns:** *`Element`*