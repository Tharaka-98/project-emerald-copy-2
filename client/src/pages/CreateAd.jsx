import React, { useState } from "react";
import axios from "axios";

function CreateAd() {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    phone: "",
    details: "",
    image: null,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleImageRemove = () => {
    setImage(null); // Clear the image state
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("subtitle", formData.subtitle);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("details", formData.details);
    formDataToSend.append("image", image, image.name);

    try {
      // Make a POST request to your backend endpoint with the form data
      const response = await axios.post("http://localhost:3001/api/createAd", formDataToSend);

      // Handle the response from the server as needed
      console.log("Advertisement created:", response.data);

      // Optionally, clear the form fields and image
      setFormData({
        title: "",
        subtitle: "",
        phone: "",
        description: "",
        details: "",
        image: null,
      });
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error :", error);
    }
  };


  const ContactTextArea = ({ row, placeholder, name, value, onChange }) => {
    return (
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
    );
  };

  const ContactInputBox = ({ type, placeholder, name, value, onChange }) => {
    return (
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <div className="flex flex-wrap -mx-4 lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <h2 className="mb-6 text-[32px] text-success font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                Create Your Advertisement
              </h2>
              <p className="text-base leading-relaxed mb-9 text-body-color">
                Welcome to the "Create Advertisement" page. This is where you
                can showcase your products or services to a wider audience.
              </p>

              {/* <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <svg
                    width={28}
                    height={19}
                    viewBox="0 0 28 19"
                    className="fill-accent"
                  >
                    <path d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z" />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark">
                    Email Address
                  </h4>
                  <p className="text-base text-body-color">
                    info@emeraldturfservices.ca
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative p-8 bg-base-100 rounded-lg shadow-lg sm:p-12">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                
                <ContactInputBox
                  type="text"
                  name="title"
                  placeholder="Advertisement Title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
                <ContactInputBox
                  type="text"
                  name="subtitle"
                  placeholder="Add Advertisement Subtitle"
                  value={formData.subtitle}
                  onChange={handleInputChange}
                />
                <ContactInputBox
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <ContactTextArea
                  row="6"
                  placeholder="Description"
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                />
                <div className="mb-6">
                  <label htmlFor="image" className="text-base text-body-color">
                    Advertisement Image:
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                  />
                </div>
                {image && (
                  <div className="mb-6">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Selected Image"
                      className="max-w-full h-auto"
                    />
                    <button
                      type="button"
                      onClick={handleImageRemove}
                      className="text-red-500 hover:text-red-700 cursor-pointer mt-2"
                    >
                      Remove
                    </button>
                  </div>
                )}
                <div>
                  <button
                    type="submit"
                    className="w-full p-3 text-white transition border rounded border-success bg-success hover:bg-opacity-90"
                  >
                    Create Advertisement
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAd;
