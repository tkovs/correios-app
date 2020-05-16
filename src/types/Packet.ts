interface Locale {
  city: string
  place: string
  state: string
}

interface Status {
  datetime: Date
  from?: Locale
  locale?: Locale
  to?: Locale
  status: string
}

export type Packet = {
  code: string
  createdAt: Date
  lastView: Date
  mode: string
  statuses: Status[]
  status: string
  title: string
  updatedAt: Date
}
