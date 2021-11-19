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

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
