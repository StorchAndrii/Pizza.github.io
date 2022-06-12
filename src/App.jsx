import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./scss/app.scss";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import { getPizza } from "./redux/pizzaSlice/pizzaSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizza());
    window.scroll(0, 0);
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
