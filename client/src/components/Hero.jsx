import React from "react";
import aboutImage from "../assets/images/about.jpg";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import { Link } from "react-router-dom";

const carouselImages = [slide1, slide2, slide3, aboutImage];
function Hero() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl text-success">
          Emerald Turf Services
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          At Emerald Turf Services, we understand the value of a well-maintained
          lawn and landscape. Our commitment is to provide you with top-notch
          services, ensuring your outdoor areas are not only aesthetically
          pleasing but also healthy and sustainable. We take pride in our
          ability to turn your dreams of a stunning lawn and garden into a
          reality, and we do it with a passion that is second to none.
        </p>
        <div className="mt-10 ">
          <Link to="quote" className="btn btn-success ">
            GET A QUOTE
          </Link>
        </div>
      </div>
      <div className="hidden  h-[28rem] lg:carousel carousel-center   p-2 space-x-2 bg-neutral rounded-box">
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80  object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
