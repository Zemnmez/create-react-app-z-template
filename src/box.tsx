/**
 * @module example
 */

import * as React from 'react';
import { DOMRect } from './declarations';

/**
 * A [[Box]] draws a rectangle of given size.
 *
 * @example
 * ```
 * [[include:example/src/Box.js]]
 * ```
 */
export const Box = ({ height, width }: Pick<DOMRect, 'height' | 'width'>) => <div {...{
	style: {
		height: `${height}px`,
		width: `${width}px`,
		display: 'inline-block'
	}
}}/>
