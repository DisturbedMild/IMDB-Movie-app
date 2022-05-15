import { Fragment } from "react";

import Movies from "../components/movies/Movies";

const MoviesPage = () => {
  return (
    <Fragment>
      <Movies
        title="Coming Soon"
        url="https://imdb-api.com/en/API/ComingSoon/k_i0sj17yx"
      />
      <Movies
        title="In Theathers"
        url="https://imdb-api.com/en/API/InTheaters/k_i0sj17yx"
      />
    </Fragment>
  );
};

export default MoviesPage;
