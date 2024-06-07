import React, { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
// import Footer from "../footer/Footer";

const Main = () => {
  return (
    <Fragment>
      <Header></Header>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </Fragment>
  );
};

export default Main;
