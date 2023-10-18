import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const AddEmailRow = () => {
  const { emailData } = useLoaderData();
  return (
    <>
      {emailData.map((detail) => {
        const { id, name, title, time } = detail;
        return (
          <tr key={id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <Link to={`/${title}`}>{name}</Link>
            </td>
            <td>{title}</td>
            <td>{time} ago</td>
          </tr>
        );
      })}
    </>
  );
};

export default AddEmailRow;
