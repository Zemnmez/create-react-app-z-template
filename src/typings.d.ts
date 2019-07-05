/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 * @hidden
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

/**
 * @hidden
 */
interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

/**
 * @hidden
 */
declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent }
}
