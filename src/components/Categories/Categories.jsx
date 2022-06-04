import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPizza } from "../../pizzaSlice/pizzaSlice";

const Categories = () => {
  const dispatch = useDispatch();

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [active, setActive] = useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((categories, index) => (
          <li
            key={index}
            className={active === index ? "active" : ""}
            onClick={() => {
              setActive(index);
              dispatch(getPizza(index));
            }}
          >
            {categories}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
