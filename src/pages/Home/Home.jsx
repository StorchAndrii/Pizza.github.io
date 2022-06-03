import React from "react";
import { useSelector } from "react-redux";

import "../../scss/app.scss";
import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import PizzaSkeleton from "../../components/PizzaBlock/PizzaSkeleton";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";

const Home = () => {
  const pizzas = useSelector((state) => state.pizzaSlice.pizzas);

  const isLoading = useSelector((state) => state.pizzaSlice.isLoading);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(12)].map((_, index) => <PizzaSkeleton key={index} />)
          : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
