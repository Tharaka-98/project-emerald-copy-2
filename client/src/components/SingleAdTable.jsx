import React, { useState } from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";
import { singleData } from "../single.ad.data";
import axios from "axios"; // Import Axios or your preferred HTTP library

const SingleAdTable = () => {
  const { id } = useParams();
  // const singleData = useLoaderData();

  const career = singleData.find((obj) => obj.id === parseInt(id));

  if (!career) {
    return <div>Career not found</div>;
  }

  // State to track the active status of the ad
  const [isActive, setIsActive] = useState(career.status.active);

  // Function to toggle the active status
  const toggleActiveStatus = () => {
    setIsActive(!isActive);
    // You can also make an API call to update the active status on the server here
  };

  // Function to delete the advertisement
  const deleteAdvertisement = () => {
    // You should send an API request to your server to delete the ad
    axios
      .delete(`http://localhost:3001/api/deleteAd/${id}`)
      .then((response) => {
        // Handle the success response, such as navigating to a different page
        // or showing a success message to the user.
      })
      .catch((error) => {
        // Handle any errors that occurred during the deletion process.
        console.error("Error deleting advertisement:", error);
      });
  };

  // Determine the badge color based on the 'active' property
  const badgeColor = career.status.active ? "bg-green-500" : "bg-red-500";
  const buttonText = isActive ? "Deactivate" : "Activate";

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
              </h4>
              <ul className="list-disc mt-2 pl-3">
                {career.details.map((textList) => {
                  const { id, dis } = textList;
                  return <li key={id}>{dis}</li>;
                })}
              </ul>
              <p className="mt-3 text-2lg">Contact: {career.contact}</p>
              {/* Toggle Active Status Button */}
              <div className="flex flex-col sm:flex-row">
                <div className="mt-10">
                  <button
                    className={`btn btn-md ${
                      isActive ? "btn-success" : "btn-danger"
                    }`}
                    onClick={toggleActiveStatus}
                  >
                    {buttonText}
                  </button>
                </div>
                <div className="mt-2 sm:mt-10 ml-10 md:ml-10">
                  <button
                    className="btn btn-success btn-md"
                    onClick={deleteAdvertisement}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAdTable;
