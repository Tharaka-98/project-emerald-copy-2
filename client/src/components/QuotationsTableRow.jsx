import React from "react";
import { useLoaderData } from "react-router-dom";

const QuotationsTableRow = () => {
  const { quotationsData } = useLoaderData();
  return (
    <>
      {quotationsData.map((detail) => {
        const { id, name, email, phone, message, service } = detail;
        return (
          <tr key={id}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{message}</td>
            <td>{service}</td>
          </tr>
        );
      })}
    </>
  );
};

export default QuotationsTableRow;
