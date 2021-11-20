import React from "react";

const TableHeader = ({ columns, sortColumn, onSort }) => {
  const raiseSort = (path) => {
    const tmpSortColumn = { ...sortColumn };
    if (tmpSortColumn.path === path) {
      tmpSortColumn.order = tmpSortColumn.order === "asc" ? "desc" : "asc";
    } else {
      tmpSortColumn.path = path;
      tmpSortColumn.order = "asc";
    }
    onSort(tmpSortColumn);
  };

  const renderSortIcon = (column) => {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            className="clickable"
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
          >
            {column.label}
            <span style={{ paddingRight: "0.7rem" }}></span>
            {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
