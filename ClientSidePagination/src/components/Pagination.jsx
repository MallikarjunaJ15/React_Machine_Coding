import React from "react";

const Pagination = ({ totalPage, currentPage, setCurrentPage }) => {
  const prevDisabled = currentPage < 2;
  const nextDisabled = currentPage == totalPage;
  return (
    <div className="buttons">
      <button
        disabled={prevDisabled}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>
      <h1>Page:{currentPage}</h1>
      <button
        disabled={nextDisabled}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;