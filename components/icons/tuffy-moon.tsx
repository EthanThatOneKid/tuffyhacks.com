interface Props {
  width: number;
  height: number;
}

export default function TuffyMoon({ width = 254, height = 254 }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 254 254"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={127} cy={127} r={127} fill="#F4F1C9" />
    </svg>
  );
}
