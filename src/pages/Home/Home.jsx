import React from "react";
import { useSelector } from "react-redux";

import "../../scss/app.scss";
import Categories, { categories } from "../../components/Categories/Categories";
import PizzaSkeleton from "../../components/PizzaBlock/PizzaSkeleton";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import Sort from "../../components/Sort/Sort";
import Pagination from "../../components/Pagination/Pagination";
import NotFoundBlock from "../../components/NotFoundBlock/ NotFoundBlock";
import {
  selectorPizzas,
  selectorSearch,
} from "../../redux/pizzaSlice/pizzaSlice";

const Home = () => {
  const { itemsPizza, status } = useSelector(selectorPizzas);
  const { category } = useSelector(selectorSearch);

  const pizzas = itemsPizza.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(4)].map((_, index) => (
    <PizzaSkeleton key={index} />
  ));
  console.log(status);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">
        {category ? categories[category] : "Все"} пиццы
      </h2>
      {status === "error" ? (
        <div>
          <NotFoundBlock />
          <p className="content__title">
            К сожалениюб не удалось загрузить "Storch Pizza"
            <br />
            Попробуйте позже...
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}

      <Pagination />
    </div>
  );
};

export default Home;
