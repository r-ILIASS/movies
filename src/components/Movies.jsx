import React, { useState, useEffect } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/Like";
import Pagination from "./common/Pagination";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setMovies(getMovies());
  }, []);

  const handleDelete = (movie) => {
    setMovies(movies.filter((m) => m._id !== movie._id));
  };

  const handleLike = (movie) => {
    const index = movies.indexOf(movie);
    const tmpMovies = [...movies];
    tmpMovies[index].liked = !tmpMovies[index].liked;
    setMovies(tmpMovies);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const { length: moviesCount } = movies;
  if (moviesCount === 0) return <h3>There are no movies in the database</h3>;

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
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like
                  handleLike={() => handleLike(movie)}
                  liked={movie.liked}
                />
              </td>
              <td>
                <button
                  onClick={() => handleDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        itemsCount={moviesCount}
        pageSize={4}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

export default Movies;
