import React, { Fragment } from 'react';
// import Loader from "../layouts/Loader/Loader";
import { Outlet } from 'react-router-dom'
// import { Custompagesswitcher } from '../layouts/Switcher/custompagesswitcher';

import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer } from "react-toastify";

export default function Custompages() {

  if (typeof window !== "undefined") {
    injectStyle();
  }

  return (
    <Fragment>
      {/* <Loader /> */}
      {/* <Custompagesswitcher /> */}
      <ToastContainer />
      <Outlet />
    </Fragment>
  );
}
