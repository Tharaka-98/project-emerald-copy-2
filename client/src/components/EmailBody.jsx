import React from 'react'
import AddEmailRow from './AddEmailRow'


const EmailBody = () => {
  return (
    <>
    <div className='container'>
        <div className=''>
        <div className="flex mb-20">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl text-success mr-20">
          Mail
        </h1>
        </div>
            <div className='flex justify-between items-center mx-3 -mt-7 mb-3'>
                <div className='h1'>
                    <h3>Inbox</h3>
                </div>
                <div className='flex justify-end'>
                    <h3>Search</h3>
                </div>
            </div>
            <div className='mt-6s'>
            <table className="table">
          {/* head */}
          <thead>
      <tr>
        <th>Read</th>
        <th>Name</th>
        <th>Title</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <AddEmailRow />
    </tbody>  
          
        </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default EmailBody