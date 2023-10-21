import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { services } from "../data";
import axios from 'axios'; // Import axios

export const loader = () => {
  return { services };
};

function Quote() {
  const { services } = useLoaderData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
    services: [],
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await axios.post('http://localhost:3001/api/submit-quote', formData);
      if (response.status === 200) {
        alert('Quote submitted successfully');
        // You can reset the form or redirect the user here
      } else {
        alert('Failed to submit the quote');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting the quote');
    }
  };

  const handleServiceChange = (e) => {
    const { name, checked } = e.target;

    // Using ...prevData to update the services array in the form data
    setFormData((prevData) => {
      if (checked) {
        // If the checkbox is checked, add the service to the array
        return { ...prevData, services: [...prevData.services, name] };
      } else {
        // If the checkbox is unchecked, remove the service from the array
        return { ...prevData, services: prevData.services.filter((service) => service !== name) };
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
    return (
      <>
        <div className="mb-6">
          <textarea
            rows={row}
            placeholder={placeholder}
            name={name}
            className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
            defaultValue={defaultValue}
          />
        </div>
      </>
    );
  };

  const ContactInputBox = ({ type, placeholder, name }) => {
    return (
      <>
        <div className="mb-6">
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
          />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <h2 className=" mb-6 text-[32px] text-success text-center font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
          Request Your Quote Today
        </h2>
        <div className="flex flex-wrap -mx-4 lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="relative p-8 bg-base-100 rounded-lg shadow-lg sm:p-12 flex flex-col h-full">
              <form className="flex-grow" onSubmit={handleFormSubmit}>
                <ContactInputBox
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                onChange={handleChange}
                />
                <ContactInputBox
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                onChange={handleChange}
                />
                <ContactInputBox
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                onChange={handleChange}
                />
                <ContactTextArea
                  row="6"
                  placeholder="Your Message"
                  name="details"
                  defaultValue=""
                  value={formData.details}
                onChange={handleChange}
                />
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mt-1 relative p-8 bg-base-100 rounded-lg shadow-lg sm:p-12 flex flex-col h-full">
              <form  className="flex-grow" onSubmit={handleFormSubmit}>
                <div className="my-3 border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none">
                  <fieldset>
                    <legend className="text- font-semibold leading-6 text-gray-900">
                      OUR SERVICES
                    </legend>
                    <div className="mt-6 space-y-6">
                      {services.map((service) => {
                        const { id, title, text } = service;
                        return (
                          <div key={id} className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                              <input
                                id={id}
                                name={title}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300"
                                onChange={handleServiceChange}
                              />
                            </div>
                            <div className="text-sm leading-6">
                              <label
                                htmlFor={id}
                                className="font-medium text-gray-900"
                              >
                                {title}
                              </label>
                              <p className="text-gray-500">{text}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="button mt-10 flex justify-center">
          <button
            type="submit"
            className="w-auto p-3  text-white transition border rounded border-success bg-success hover:bg-opacity-90"
          >
            Send Quote
          </button>
        </div>
      </div>
    </>
  );
}

export default Quote;
