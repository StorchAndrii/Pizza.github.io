import React, { useState } from "react";

const Categories = () => {
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
