export function formatLocation(location: Locale): string {
  return `${location.place} - ${location.city} / ${location.state}`
}

export const formatInitialLocation = (status: Partial<Status>): string => {
  if (!status.locale && !status.from) {
    return ''
  }

  const location = status.locale || status.from

  return `${location?.city} / ${location?.state}`
}
