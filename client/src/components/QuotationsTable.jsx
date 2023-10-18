import React from 'react'
import QuotationsTableRow from './QuotationsTableRow';

const QuotationsTable = () => {
    return (
        <div>
          <div className="overflow-x-auto">
            <div className="flex mb-20 sm:flex-col lg:flex-row">
              <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight  sm:text-6xl text-success mr-20">
                Quotations
              </h1>
            </div>
    
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>name</th>
                  <th>email</th>
                  <th>phone</th>
                  <th>message</th>
                  <th>service</th>
                </tr>
              </thead>
              <tbody>
                <QuotationsTableRow />
              </tbody>
            </table>
          </div>
        </div>
      );
}

export default QuotationsTable