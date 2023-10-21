import React from "react";
import AddEmailRow from "./AddEmailRow";

const EmailBody = () => {
  return (
    <>
      <div className="container">
        <div className="">
          <div className="flex mb-20">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl text-success mr-20">
              Mail
            </h1>
          </div>
          <div className="flex justify-between items-center mx-3 -mt-7 mb-3">
            <div className="flex justify-end">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="mt-6">
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
  );
};

export default EmailBody;
