import React from "react";
import { useSelector } from "react-redux";

import "../../scss/app.scss";
import Categories, { categories } from "../../components/Categories/Categories";
import PizzaSkeleton from "../../components/PizzaBlock/PizzaSkeleton";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import Sort from "../../components/Sort/Sort";
import Pagination from "../../components/Pagination/Pagination";
import NotFoundBlock from "../../components/NotFoundBlock/ NotFoundBlock";

const Home = () => {
  const items = useSelector((state) => state.pizzaSlice.pizzas);
  const status = useSelector((state) => state.pizzaSlice.status);
  const category = useSelector(
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
