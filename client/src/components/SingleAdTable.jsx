import React from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";
import { singleData } from "../single.ad.data";

const SingleAdTable = () => {
  const { id } = useParams();
  // const singleData = useLoaderData();

  const career = singleData.find((obj) => obj.id === parseInt(id));

  if (!career) {
    return <div>Career not found</div>;
  }

  // Determine the badge color based on the 'active' property
  const badgeColor = career.status.active ? "bg-green-500" : "bg-red-500";

  return (
    <div>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/advertisement">advertisement</Link>
          </li>
          <li>
            <Link to="/advertisement/:id">{career.title}</Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="mt-10 mx-8 w-auto h-auto bg-white rounded-md px-4 py-4">
          <div className="mb-4 ml-2 flex flex-row">
            <div>
            <h1 className="capitalize text-success text-3xl font-bold">
              {career.title}
            </h1>
            </div>
            {/* Display the badge with the appropriate color and text */}
            <div
              className={`${badgeColor} text-white ml-2 p-2 rounded-full w-1 h-1 inline-block`}
            ></div>
          </div>
          <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
            <img
              src={career.image}
              alt={career.title}
              className="w-96 h-96 object-cover rounded-lg lg:w-full  "
            />
            <div>
              <h4 className="text-2xl text-accent font-bold mt-2">
                Description: <br />
                {career.description}
              </h4>
              <ul className="list-disc mt-2 pl-3">
                {career.text2.map((textList) => {
                  const { id, dis } = textList;
                  return <li key={id}>{dis}</li>;
                })}
              </ul>
              <p className="mt-3 text-2lg">Contact: {career.contact}</p>

              {/* CART BUTTON */}
              <div className="mt-10 ">
                <Link className="btn btn-success btn-md" to="/fwqffqf">
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAdTable;
