import React, { useState } from "react";
import axios from "axios";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link, useNavigate } from "react-router-dom";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const [userDetails, setUserDetails] = useState({
    identifier: "",
    password: "",
  });
  // Inside your component
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3001/login", userDetails)
        .then((response) => {
          console.log("Response data: ", response.data);
          if (response.data.message === "Success") {

            const token = response.data.token;
            // Store the token in local storage or a secure cookie
            localStorage.setItem("token", token);
            // Redirect to the dashboard or perform other actions as needed
            navigate("/dashboard/home");
          } else {
            // Display an error message if login fails
            setErrorMessage("Invalid email or password. Please try again.");
          }
        })
        .catch((err) => {
          setErrorMessage("Invalid email or password. Please try again.");
          console.error(err);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Destructure name and value
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        onSubmit={handleSubmit}
      >
        <h4 className="text-center text-success text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          placeholder="test@example.com"
          value={userDetails.identifier} // Use state value
          onChange={handleInputChange} // Handle user input change
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          placeholder="********"
          value={userDetails.password} // Use state value
          onChange={handleInputChange} // Handle user input change
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <div className="text-red-700">
          {" "}
          {/* Use a different class for login error */}
          {errorMessage && <span className="text-red-700">{errorMessage}</span>}
        </div>
        <p className="text-center">
          Not the Admin?
          <Link to="/" className="ml-2 link link-hover link-success capitalize">
            Go Home
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
