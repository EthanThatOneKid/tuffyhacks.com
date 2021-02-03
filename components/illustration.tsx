import { CSSProperties, useRef } from 'react';

interface Props {
  data: SVGSVGElement;
  x?: string;
  y?: string;
  width?: number;
  height?: number;
}

const generateCssVariables = (
  x: string,
  y: string,
  width: number,
  height: number
): CSSProperties => ({
  /* '--x-position': x */
});
//   `: ${x}; --y-position: ${y}; --custom-width: ${width}; --custom-height: ${height}`;

export default function Illustration({ data, x = '0', y = '0', width = 256, height = 256 }: Props) {
  return <data style={generateCssVariables(x, y, width, height)} />;
}
