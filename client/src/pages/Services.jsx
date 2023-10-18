import React from 'react';
import { FeaturedServices } from '../components';
import { services } from "../data";
export const loader = () => {
  return { services };
};

const Services = () => {
  return (
     <FeaturedServices /> 
  )
}

export default Services