import React from "react";
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import styles from "./Pagination.module.scss";

const Pagination = () => {
  console.log(styles);
  return (
    <div className={styles.root}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e) => console.log(e)}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
