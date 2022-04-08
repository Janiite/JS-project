import React from 'react'

const Notification = ({showNotification}) => {
  return (
    <div className={`notification-container  ${showNotification ? 'show' :  '' } `}> {/*add a show as a class */} 
    <p>You have already entered this letter</p>
  </div>
  )
}

export default Notification