export function formatLocation(location) {
  return `${location.place} - ${location.city} / ${location.state}`
}

export function formatInitialLocation(packet) {
  const location = packet.locale || packet.from

  return `${location.city} / ${location.state}`
}
