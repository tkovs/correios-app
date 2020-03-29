import React from 'react'
import PropTypes from 'prop-types'

import PacketTrackingItem from './PacketTrackingItem'
import { apiDateTimeToDate } from '../../utils/datetime'

function PacketTrackingItemContainer({
  datetime: dt,
  status,
  from,
  to,
  locale,
}) {
  const datetime = apiDateTimeToDate(dt)

  return (
    <PacketTrackingItem
      status={status}
      datetime={datetime}
      from={from}
      to={to}
      locale={locale}
      note=""
    />
  )
}

PacketTrackingItemContainer.propTypes = {
  status: PropTypes.string.isRequired,
  datetime: PropTypes.shape({
    date: PropTypes.shape({
      day: PropTypes.number,
      month: PropTypes.number,
      year: PropTypes.number,
    }),
    time: PropTypes.shape({
      hour: PropTypes.number,
      minute: PropTypes.number,
    }),
  }).isRequired,
  from: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.string,
    place: PropTypes.string,
  }),
  to: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.string,
    place: PropTypes.string,
  }),
  locale: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.string,
    place: PropTypes.string,
  }),
}

PacketTrackingItemContainer.defaultProps = {
  from: undefined,
  to: undefined,
  locale: undefined,
}

export default PacketTrackingItemContainer
