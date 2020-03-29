export function apiDateTimeToDate(datetime) {
  const {
    date: { day, month, year },
    time: { hour, minute },
  } = datetime

  return new Date(year, month - 1, day, hour, minute)
}
