export default function CountdownFormat({ days, hours, minutes, seconds, completed }: any) {
  if (completed) {
    return <p>The event will begin shortly...</p>;
  } else {
    return (
      <>
        <p>{days} days</p>
        <p>{hours} hours</p>
        <p>{minutes} minutes</p>
        <p>{seconds} seconds</p>
      </>
    );
  }
}
