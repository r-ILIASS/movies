import React, { useState, useEffect } from "react";
import MoviesTable from "./MoviesTable";
import Like from "./common/Like";
import Pagination from "./common/Pagination";
import ListGroup from "./common/ListGroup";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  useEffect(() => {
    setMovies(getMovies());
    setGenres([{ name: "All Genres" }, ...getGenres()]);
    // setGenres(getGenres());
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

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  /// Filter Movies
  const filtered =
    selectedGenre && selectedGenre._id
      ? movies.filter((m) => m.genre._id === selectedGenre._id)
      : movies;

  /// Paginate Movies
  const currentMovies = paginate(currentPage, pageSize, filtered);

  /// Render
  const { length: moviesCount } = filtered;

  if (moviesCount === 0) return <h3>There are no movies in the database</h3>;
  return (
    <div className="row">
      <div className="col-2">
        <ListGroup
          items={genres}
          onItemSelect={handleGenreSelect}
          selectedItem={selectedGenre}
        />
      </div>
      <div className="col">
        <MoviesTable
          currentMovies={currentMovies}
          moviesCount={moviesCount}
          onLike={handleLike}
          onDelete={handleDelete}
        />
        <Pagination
          itemsCount={moviesCount}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Movies;
