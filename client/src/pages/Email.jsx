import React from 'react'
import { EmailBody } from '../components'
import { emailData } from '../email.data'

export const loader = () => {
  return { emailData }
}

const Email = () => {
  return (
    <div>
        <EmailBody />
    </div>
  )
}

export default Email