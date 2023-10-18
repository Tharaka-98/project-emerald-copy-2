import React from "react";
import aboutImage from "../assets/images/about.jpg";
import { FeaturedServices } from "../components";
import { services } from "../data";

export const loader = () => {
  return { services };
};

function About() {
  return ( 
    <>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold text-success">
              Emerald Turf Service
            </h1>
            <p className="py-6">
              Welcome to Emerald Turf Services, your premier choice for
              professional lawn care and landscaping solutions in Edmonton,
              Canada. At Emerald Turf Services, we are dedicated to transforming
              your outdoor spaces into vibrant, lush, and captivating
              environments that reflect your unique vision.
            </p>
          </div>
          <img src={aboutImage} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
      </div>
      <FeaturedServices />
    </>
  );
}

export default About;
