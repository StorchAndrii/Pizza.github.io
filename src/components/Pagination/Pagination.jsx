import React from "react";
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import styles from "./Pagination.module.scss";
import { useDispatch } from "react-redux";
import { getPizza } from "../../redux/pizzaSlice/pizzaSlice";

const Pagination = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        previousLabel="
			< previous"
        onPageChange={(event) =>
          dispatch(getPizza({ page: event.selected + 1 }))
        }
        pageRangeDisplayed={4}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
