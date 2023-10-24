import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  About,
  Error,
  Landing,
  Login,
  Quote,
  Services,
  SingleService,
  ContactUs,
  DashboardLayout,
  DashLanding,
  Advertisement,
  Email,
  SingleAd,
  UserContacts,
  Quotations,
  CreateAd,
  SendMail,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as aboutLoader } from "./pages/About";
import { loader as serviceLoader } from "./pages/Services";
import { loader as quoteLoader } from "./pages/Quote";
import { loader as advertisementLoader } from "./pages/Advertisement";
import { loader as singleAdLoader } from "./pages/SingleAd";
import { loader as emailLoader } from "./pages/Email";
import { loader as contactLoader } from "./pages/UserContacts";
import { loader as quotasLoader } from "./pages/Quotations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path: "about",
        element: <About />,
        loader: aboutLoader,
      },
      {
        path: "services",
        element: <Services />,
        loader: serviceLoader,
      },
      {
        path: "service/:id",
        element: <SingleService />,
      },
      {
        path: "quote",
        element: <Quote />,
        loader: quoteLoader,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: <DashLanding />,
      },
      {
        path: "advertisement",
        element: <Advertisement />,
        loader: advertisementLoader,
      },
      {
        path: "advertisement/:id",
        element: <SingleAd />,
        loader: singleAdLoader,
      },
      {
        path: "email",
        element: <Email />,
        loader: emailLoader,
      },
      {
        path: "contact",
        element: <UserContacts />,
        loader: contactLoader,
      },
      {
        path: "quotations",
        element: <Quotations />,
        loader: quotasLoader,
      },
      {
        path: "advertisement/createAd",
        element: <CreateAd />,
      },
      {
        path: "email/sendMail",
        element: <SendMail />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
