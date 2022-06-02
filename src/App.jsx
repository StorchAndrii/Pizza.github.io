import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPizza } from "./pizzaSlice/pizzaSlice";

import "../src/scss/app.scss";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import PizzaSkeleton from "./components/PizzaBlock/PizzaSkeleton";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";

function App() {
  const pizzas = useSelector((state) => state.pizzaSlice.pizzas);

  const isLoading = useSelector((state) => state.pizzaSlice.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizza());
    // setIsLoading(false);
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(12)].map((_, index) => (
                  <PizzaSkeleton key={index} />
                ))
              : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
