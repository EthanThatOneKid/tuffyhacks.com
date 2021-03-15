export const formatTimeWithUnits = (value: number, unit: string) =>
  `${value} ${unit}${value === 1 ? '' : 's'}`;

export default function CountdownFormat({ days, hours, minutes, seconds, completed }: any) {
  if (completed) {
    return <p>The event will begin shortly...</p>;
  } else {
    return (
      <>
        <p>{formatTimeWithUnits(days, 'day')}</p>
        <p>{formatTimeWithUnits(hours, 'hour')}</p>
        <p>{formatTimeWithUnits(minutes, 'minute')}</p>
        <p>{formatTimeWithUnits(seconds, 'second')}</p>
      </>
    );
  }
}
