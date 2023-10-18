import React from 'react'
import { UserContactsTable } from '../components'
import { contactData } from '../contact.data'

export const loader = () => {
    return { contactData }
}

const UserContacts = () => {
  return (
    <>
    <UserContactsTable />
    </>
  )
}

export default UserContacts