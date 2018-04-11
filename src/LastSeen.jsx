import React from 'react'
import TimeAgo from 'react-time-ago'
 
export default function LastSeen({ date }) {
  return (
    <div>
      Last seen:
      <TimeAgo>{date}</TimeAgo>
    </div>
  )
}