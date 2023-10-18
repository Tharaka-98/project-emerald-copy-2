import React from "react";
import { useLoaderData } from "react-router-dom";

const UserContactsTableRow = () => {
  const { contactData } = useLoaderData();
  return (
    <>
      {contactData.map((detail) => {
        const { id, name, email, phone } = detail;
        return (
          <tr key={id}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
          </tr>
        );
      })}
    </>
  );
};

export default UserContactsTableRow;
