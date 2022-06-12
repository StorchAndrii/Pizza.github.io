import React from "react";
import { useSelector } from "react-redux";

import "../../scss/app.scss";
import Categories, { categories } from "../../components/Categories/Categories";
import PizzaSkeleton from "../../components/PizzaBlock/PizzaSkeleton";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import Sort from "../../components/Sort/Sort";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
  const items = useSelector((state) => state.pizzaSlice.pizzas);
  const isLoading = useSelector((state) => state.pizzaSlice.isLoading);

  const currentCategory = useSelector(
    (state) => state.pizzaSlice.searchParams.category
  );

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(4)].map((_, index) => (
    <PizzaSkeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">
        {currentCategory ? categories[currentCategory] : "Все"} пиццы
      </h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination />
    </div>
  );
};

export default Home;
