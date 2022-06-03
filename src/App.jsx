import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

import "./scss/app.scss";
import { getPizza } from "./pizzaSlice/pizzaSlice";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizza());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
