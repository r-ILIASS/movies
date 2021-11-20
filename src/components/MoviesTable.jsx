import React from "react";
import Table from "./common/Table";
import Like from "../components/common/Like";

const MoviesTable = ({
  currentMovies,
  moviesCount,
  sortColumn,
  onLike,
  onDelete,
  onSort,
}) => {
  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like handleLike={() => onLike(movie)} liked={movie.liked} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <>
      <h3>
        {moviesCount === 1
          ? "There is one movie in the database"
          : `There are ${moviesCount} movies in the database.`}
      </h3>
      <Table
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={currentMovies}
      />
    </>
  );
};

export default MoviesTable;
