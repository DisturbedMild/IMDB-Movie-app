import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import MoviesComingSoon from "../components/movies/MoviesComingSoon";
import MoviesInTheather from "../components/movies/MoviesInTheather";
import Movie from "../components/movies/Movie";

const Movies = () => {
  return (
    <Fragment>
      <MoviesComingSoon />
      <MoviesInTheather />
      <Routes>
        <Route path="/movies/movie/:movieId"  element={<Movie />} />
      </Routes>
    </Fragment>
  );
};

export default Movies;
