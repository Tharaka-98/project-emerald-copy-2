import React from 'react'
import { SingleAdTable } from '../components'
import { singleData } from '../single.ad.data'

export const loader = () => {
  return {singleData}
}

const SingleAd = () => {
  return (
    <>
      <div className='container'>
        <div>
          <SingleAdTable />
        </div>
      </div>
    </>
  )
}

export default SingleAd