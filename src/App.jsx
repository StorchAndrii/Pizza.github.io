import { useDispatch } from "react-redux";
import { useEffect } from "react";

import "./scss/app.scss";
import { getPizza } from "./pizzaSlice/pizzaSlice";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizza());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
