import React from "react";
import SectionTitle from "./SectionTitle";
import ServicesGrid from "./ServicesGrid";

function FeaturedServices() {
  return (
    <div className="pt-24 ">
      <SectionTitle text="Our Easy and Reliable services " />
      <ServicesGrid />
    </div>
  );
}

export default FeaturedServices;
