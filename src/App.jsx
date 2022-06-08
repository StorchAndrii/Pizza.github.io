import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./scss/app.scss";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";

import { getPizza } from "./pizzaSlice/pizzaSlice";

function App() {
  const searchInputValue = useSelector(
    (state) => state.pizzaSlice.searchParams.search
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizza(searchInputValue));
    window.scroll(0, 0);
  }, [dispatch, searchInputValue]);

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
