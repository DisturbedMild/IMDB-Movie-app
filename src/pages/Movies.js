import { Fragment } from "react";

import MoviesComingSoon from "../components/movies/MoviesComingSoon";
import MoviesInTheather from "../components/movies/MoviesInTheather";

const Movies = () => {
  return (
    <Fragment>
      <MoviesComingSoon />
      <MoviesInTheather />
    </Fragment>
  );
};

export default Movies;
