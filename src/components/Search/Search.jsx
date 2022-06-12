import React from "react";
import search from "../../assets/img/search.svg";
import clear from "../../assets/img/clear.svg";
import styles from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPizza } from "../../redux/pizzaSlice/pizzaSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchInputValue = useSelector(
    (state) => state.pizzaSlice.searchParams.search
  );
  return (
    <div className={styles.root}>
      <img className={styles.icon} src={search} alt="search" />
      <input
        className={styles.input}
        placeholder={"Поиск пиццы..."}
        value={searchInputValue}
        onChange={(event) => dispatch(getPizza({ search: event.target.value }))}
      />
      {searchInputValue && (
        <img
          onClick={() => dispatch(getPizza({ search: "" }))}
          className={styles.clear}
          src={clear}
          alt="clear"
        />
      )}
    </div>
  );
};

export default Search;
