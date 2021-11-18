import React from "react";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(itemsCount / pageSize); i++) {
    pages.push(i);
  }

  if (pages.length === 1) return null;

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
            style={{ cursor: "pointer" }}
          >
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
