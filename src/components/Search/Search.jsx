import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";

import searchImg from "../../assets/img/search.svg";
import clear from "../../assets/img/clear.svg";
import styles from "./Search.module.scss";
import { getPizza, selectorSearch } from "../../redux/pizzaSlice/pizzaSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector(selectorSearch);
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(getPizza({ search: str }));
    }, 1000),
    []
  );

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
      <img className={styles.icon} src={searchImg} alt="search" />
      <input
        className={styles.input}
        ref={inputRef}
        placeholder={"Поиск пиццы..."}
        value={value}
        onChange={onChangeInput}
      />
      {search && (
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
