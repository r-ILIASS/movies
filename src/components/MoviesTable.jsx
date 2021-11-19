import React from "react";
import Like from "../components/common/Like";

const MoviesTable = ({
  currentMovies,
  moviesCount,
  sortColumn,
  onLike,
  onDelete,
  onSort,
}) => {
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
    <>
      <h3>
        {moviesCount === 1
          ? "There is one movie in the database"
          : `There are ${moviesCount} movies in the database.`}
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => raiseSort("title")}>Title</th>
            <th onClick={() => raiseSort("genre.name")}>Genre</th>
            <th onClick={() => raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => raiseSort("dailyRentalRate")}>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
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
