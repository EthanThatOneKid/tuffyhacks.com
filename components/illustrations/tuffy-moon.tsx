import Illustration from '../illustration';

export default function TuffyCamper(props: Illustration['props']) {
  return (
    <Illustration {...props}>
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 254 254"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={127} cy={127} r={127} fill="#F4F1C9" />
      </svg>
    </Illustration>
  );
}
