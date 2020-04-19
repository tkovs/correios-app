export function apiDateTimeToDate(datetime) {
  const {
    date: { day, month, year },
    time: { hour, minute },
  } = datetime

  return new Date(year, month - 1, day, hour, minute)
}

export const hydrateWithDate = packet => {
  const statuses = packet.statuses.map(status => {
    const datetime = apiDateTimeToDate(status.datetime)
    return { ...status, datetime }
  })
  return { ...packet, statuses }
}
