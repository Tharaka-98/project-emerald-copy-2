import React from 'react'
import { AdMailTable } from '../components'
import { details } from '../ad.data'


export const loader = () => {
  return {details}
}

const Advertisement = () => {
  return (
    <div>
        <AdMailTable />
    </div>
  )
}

export default Advertisement