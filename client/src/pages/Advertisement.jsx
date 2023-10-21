import React from 'react'
import { AdMailTable } from '../components'
import { details } from '../ad.data'
import CreateAd from './CreateAd'


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