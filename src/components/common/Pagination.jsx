import React from "react";
import PropTypes from "prop-types";

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
            <a
              onClick={() => onPageChange(page)}
              href="!#"
              className="page-link"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
