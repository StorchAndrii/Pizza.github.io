import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import arrowTop from "../../assets/img/arrowTop.svg";
import { getPizza } from "../../redux/pizzaSlice/pizzaSlice";

const sortProperties = [
  { name: "популярности", sortProperty: "rating" },
  { name: "цене", sortProperty: "price" },
  { name: "алфавиту", sortProperty: "title" },
];

const Sort = () => {
  const dispatch = useDispatch();
  const sortRef = useRef();
  const [open, setOpen] = useState(false);

  const currentSortBy = useSelector((state) =>
    sortProperties.find(
      (property) =>
        property.sortProperty === state.pizzaSlice.searchParams.sortBy
    )
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <img src={arrowTop} alt="arrowTop" />
        <b>Сортировка по:</b>
        <span
          onClick={() => {
            setOpen(!open);
          }}
        >
          {currentSortBy.name}
        </span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortProperties.map((obj, i) => (
              <li
                key={i}
                onClick={() => {
                  setOpen(false);
                  dispatch(getPizza({ sortBy: obj.sortProperty }));
                }}
                className={
                  currentSortBy.sortProperty === obj.sortProperty
                    ? "active"
                    : ""
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
