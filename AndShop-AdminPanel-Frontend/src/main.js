import React, { useEffect } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import useAuth from "./components/Context/auth";
import ProductForm from "./components/Pages/Master/Product/ProductForm";


//App
const App = React.lazy(() => import("./components/app"));

//Dashboard
const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));

//Masters
const Category = React.lazy(() => import('./components/Pages/Master/Category/Index'))
const Product = React.lazy(() => import("./components/Pages/Master/Product/Index"))
const PrdouctForm = React.lazy(()=> import("./components/Pages/Master/Product/ProductForm"))

//custom pages
 const Custompages = React.lazy(()=>import("./components/custompages"))

const Login = React.lazy(() => import("./components/CustomPages/Login/Login"));
 
export default function Main() {
  const { token } = useAuth();
  return (
    <Routes>
      {token ? (
        <>
          <Route path={`/`} element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path={`/category`} element={<Category />} />
            <Route path={`/product`} element={<Product />} />
            <Route path={`/product/form`} element={<ProductForm/>}/>
          </Route>
        </>
      ) : (
        <>
          <Route path={`/`} element={<Custompages />}>
          <Route path={`/login`} element={<Login />} />
          {/* <Route path="*" element={<Navigate to={"/"} replace />} /> */}
          </Route>
        </>
      )}
    </Routes>
  );
}
