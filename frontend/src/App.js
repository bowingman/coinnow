import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import SideBar from "./components/layouts/sidebar";
import ProductList from "./containers/products";
import ProductCreate from "./containers/products/createProduct";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#292B2E] w-screen flex">
        <SideBar />
        <Routes>
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/products/create" element={<ProductCreate />} />
          <Route
            exact
            path="/login"
            element={
              <div>
                <div className="text-xl md:text-lg">
                  <div className="m-auto text-center">
                    Made with ❤️ using
                    <a
                      href="https://docs.djangoproject.com/en/3.2/"
                      className="font-bold text-red-500"
                      target="_blank"
                    >
                      {" "}
                      Django
                    </a>
                    ,
                    <a
                      href="https://reactjs.org/docs/getting-started.html"
                      className="font-bold text-react"
                      target="_blank"
                    >
                      {" "}
                      React
                    </a>{" "}
                    and
                    <a
                      href="https://tailwindcss.com/docs"
                      className="font-bold text-tailwind"
                      target="_blank"
                    >
                      {" "}
                      Tailwind CSS
                    </a>
                  </div>
                </div>
              </div>
            }
          />
          <Route exact path="/register" element={<div>456</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
