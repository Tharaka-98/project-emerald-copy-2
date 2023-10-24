import React from "react";
import AddEmailRow from "./AddEmailRow";
import { NavLink } from "react-router-dom";

const EmailBody = () => {
  return (
    <>
      <div className="container">
        <div className="">
          <div className="flex mb-20 flex-col md:flex-row">
            <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight  sm:text-6xl text-success mr-80">
              Mail
            </h1>

            <div className="navbar-end mt-3 lg:ml-96 sm:ml-0">
              <div className="dropdown dropdown-hover dropdown-right">
                <label tabIndex={0} className="btn m-1">
                  Send a Mail
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <NavLink
                      to="sendMail"
                      // className="btn btn-outline btn-success btn-md ml-4 text-capitalize"
                    >
                      Send a Mail
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink
                      to="sendMail"
                      // className="btn btn-outline btn-success btn-md ml-4 text-capitalize"
                    >
                      Send a Mail
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="sendMail"
                      // className="btn btn-outline btn-success btn-md ml-4 text-capitalize"
                    >
                      Send a Mail
                    </NavLink>
                  </li> */}
                </ul>
              </div>
              {/* <NavLink
              to="sendMail"
              className="btn btn-outline btn-success btn-md ml-4 text-capitalize"
            >
              Send a Mail
            </NavLink> */}
            </div>
          </div>
          {/* <div className="flex justify-between items-center mx-3 -mt-7 mb-3">
            <div className="flex justify-end">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div> */}
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
