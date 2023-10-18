import React from "react";
import { Outlet } from "react-router-dom";
import { DashNavbar, Footer } from "../components";

const DashboardLayout = () => {
  return (
    <>
      <DashNavbar />
      <section className="align-element py-20">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default DashboardLayout;
