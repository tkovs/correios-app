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

type Packet = {
  archived: boolean
  code: string
  createdAt: Date
  lastView: Date
  mode: string
  statuses: Status[]
  status: string
  title: string
  updatedAt: Date
}

type StatusListItem = {
  code: string
  pending: boolean
  error?: string
}

type State = {
  feedback: import('./../store/actions/feedback/types').FeedbackState
  packets: import('./../store/actions/packets/types').PacketsState
}
