import dayjs from "dayjs";

export function isClosedNomination(date: string) {
  // TODO: our assumption is that it should be considered closed after the date is past not equal to it
  return (
    dayjs(date).toDate() <
    dayjs()
      .set("hour", 0)
      .set("millisecond", 0)
      .set("second", 0)
      .set("minute", 0)
      .toDate()
  );
}
