import React, { useState, useEffect } from "react";
import _ from "lodash";
import MoviesTable from "./MoviesTable";
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
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });
  const pageSize = 4;

  useEffect(() => {
    setMovies(getMovies());
    setGenres([{ name: "All Genres", _id: "" }, ...getGenres()]);
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

  const handleSort = (tmpSortColumn) => {
    setSortColumn(tmpSortColumn);
  };

  const getPagedData = () => {
    const filtered =
      selectedGenre && selectedGenre._id
        ? movies.filter((m) => m.genre._id === selectedGenre._id)
        : movies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const currentMovies = paginate(currentPage, pageSize, sorted);

    return {
      moviesCount: filtered.length,
      data: currentMovies,
    };
  };

  /// Render
  const { moviesCount, data } = getPagedData();

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
          currentMovies={data}
          moviesCount={moviesCount}
          sortColumn={sortColumn}
          onLike={handleLike}
          onDelete={handleDelete}
          onSort={handleSort}
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
