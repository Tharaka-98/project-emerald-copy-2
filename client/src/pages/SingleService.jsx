import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { services } from "../data";

function SingleService() {
  const { id } = useParams();
  const service = services.find((obj) => obj.id === parseInt(id));
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/service/:id">{service.title}</Link>
          </li>
        </ul>
      </div>

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={service.image}
          alt={service.title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full  "
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-success text-3xl font-bold">
            {service.title}
          </h1>
          <h4 className="text-2xl text-accent font-bold mt-2">
            {service.text}
          </h4>

          <h5 className="mt-3 text-2xl">{service.text1}</h5>
          <ul className="list-disc">
            {service.text2.map((textList) => {
              const { id, dis } = textList;
              return <li key={id}>{dis}</li>;
            })}
          </ul>

          {/* CART BUTTON */}
          <div className="mt-10 ">
            <Link className="btn btn-success btn-md" to="/quote">
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleService;
