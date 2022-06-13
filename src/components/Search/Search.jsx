import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";

import search from "../../assets/img/search.svg";
import clear from "../../assets/img/clear.svg";
import styles from "./Search.module.scss";
import { getPizza } from "../../redux/pizzaSlice/pizzaSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchInputValue = useSelector(
    (state) => state.pizzaSlice.searchParams.search
  );
  const [value, setValue] = useState("");

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(getPizza({ search: str }));
    }, 1000),
    []
  );

  const inputRef = useRef();
  const onClickClear = () => {
    dispatch(getPizza({ search: "" }));
    setValue("");
    inputRef.current.focus();
  };

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={search} alt="search" />
      <input
        className={styles.input}
        ref={inputRef}
        placeholder={"Поиск пиццы..."}
        value={value}
        onChange={onChangeInput}
      />
      {searchInputValue && (
        <img
          onClick={() => onClickClear()}
          className={styles.clear}
          src={clear}
          alt="clear"
        />
      )}
    </div>
  );
};

export default Search;
