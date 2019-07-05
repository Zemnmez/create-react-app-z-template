/**
 * @module example
 */

/**
 *
 */

import { useObserver } from './useObserver'
import { callbackRef, IntersectionObserverEntry, IntersectionObserverInit } from './declarations'


// https://github.com/Microsoft/TypeScript/issues/16255#issuecomment-436935103
/**
 * @hidden
 */
declare global {
  interface Window {
    IntersectionObserver: typeof IntersectionObserver
  }
}

/**
  * [[useIntersectionObserver]] is a React hook exposing the functionality of the
  * [IntersectionObserver][mdn: IntersectionObserver] API, which is an efficient way to
  * tell when an element becomes visible within some viewport, which could be
  * the parent window, or the containing element.
  *
  * This function returns a factory function, which when called returns two values in an array:
  *
  * 1. An [IntersectionObserverEntry][mdn: IntersectionObserverEntry], or `undefined` representing
  * details on how the children were modified.
  *
  * 2. A [React ref][react docs: react ref] that you can pass in the `ref={}`
  * parameter to any elements you want to track child changes for.
  *
  * This factory type construction allows you to pass your useIntersectionObserver value
  * any number to children that you want to intersect with you.
  *
  * [mdn: IntersectionObserver]: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver "MDN docs: IntersectionObserver"
  * [mdn: IntersectionObserverEntry]: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry "MDN docs: IntersectionObserverEntry"
  * [react docs: react ref]: https://reactjs.org/docs/refs-and-the-dom.html "React Docs: Refs and the DOM"
  *
  * ```javascript
  * [[include:example/src/App.js]]
  *
  * ```
  */
export const useIntersectionObserver = (
  options?: IntersectionObserverInit
): () => [IntersectionObserverEntry | undefined, callbackRef] => useObserver(IntersectionObserver, options)
