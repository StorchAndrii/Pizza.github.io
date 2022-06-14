import React from "react";
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import styles from "./Pagination.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPizza } from "../../redux/pizzaSlice/pizzaSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state) => state.pizzaSlice.searchParams.page
  );

  return (
    <div className={styles.root}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        previousLabel="
			<"
        onPageChange={(event) =>
          dispatch(getPizza({ page: event.selected + 1 }))
        }
        forcePage={currentPage - 1}
        pageRangeDisplayed={4}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
