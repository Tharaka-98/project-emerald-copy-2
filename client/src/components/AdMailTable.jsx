import React from "react";
import AdTableRow from "./AdTableRow";
import { NavLink } from "react-router-dom";



const AdMailTable = () => {
  
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex mb-20 sm:flex-col lg:flex-row">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight  sm:text-6xl text-success mr-20">
            Advertisement
          </h1>

          <div className="navbar-end mt-3 lg:ml-80 sm:ml-0">
            {/* QUOTE*/}
            <NavLink
              to="createAd"
              className="btn btn-outline btn-success btn-md ml-4 text-capitalize"
            >
              Create a Advertisement
            </NavLink>
          </div>
        </div>

        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <AdTableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdMailTable;
