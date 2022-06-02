import "../src/scss/app.scss";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPizza } from "./pizzaSlice/pizzaSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizza());
  }, [dispatch]);

  const pizzas = useSelector((state) => state.pizzaSlice.pizzas);

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
            {pizzas.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
