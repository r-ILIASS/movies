import React from "react";
import TableHeader from "../components/common/TableHeader";
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
    { key: "like" },
    { key: "delete" },
  ];

  return (
    <>
      <h3>
        {moviesCount === 1
          ? "There is one movie in the database"
          : `There are ${moviesCount} movies in the database.`}
      </h3>
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <tbody>
          {currentMovies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like handleLike={() => onLike(movie)} liked={movie.liked} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MoviesTable;
