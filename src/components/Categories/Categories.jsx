import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizza, selectorSearch } from "../../redux/pizzaSlice/pizzaSlice";

export const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories = () => {
  const dispatch = useDispatch();

  const { category } = useSelector(selectorSearch);
  const activeCategory = category ? category : 0;

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className={activeCategory === index ? "active" : ""}
            onClick={() => {
              dispatch(getPizza({ category: index ? index : "" }));
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
