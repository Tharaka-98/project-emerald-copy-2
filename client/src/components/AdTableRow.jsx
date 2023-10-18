import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const AdTableRow = () => {
  const { details } = useLoaderData();
  return (
    <>
      {details.map((detail) => {
        const { id, link, title } = detail;
        return (
          <tr key={id}>
            <td className="flex">
              {/* Use the Link component for client-side navigation */}
              <Link to={`/${link}`}>{title}</Link><div className="-mt-1"><div className="badge badge-primary badge-xs ml-2"></div><div className="badge badge-primary badge-xs ml-1 bg-red-500"></div></div>
            </td>
            <td>{title}</td>
          </tr>
        );
      })}
    </>
  );
};

export default AdTableRow;
