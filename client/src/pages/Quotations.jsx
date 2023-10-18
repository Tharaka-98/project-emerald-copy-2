import React from 'react'
import { QuotationsTable } from '../components'
import { quotationsData } from '../quotations.data'


export const loader = () => {
  return {quotationsData}
}


const Quotations = () => {
  return (
    <div>
        <QuotationsTable />
    </div>
  )
}

export default Quotations