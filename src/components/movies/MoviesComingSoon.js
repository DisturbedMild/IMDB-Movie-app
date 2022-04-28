import { useState, useEffect } from "react";

import useHttp from "../../hooks/use-http";
import Loader from "../UI/Loader";
import MovieItem from "./MovieItem/MovieItem";
import classes from "./MoviesComingSoon.module.css";

const MoviesComingSoon = () => {
  const [moviesComingSoonList, setMoviesComingSoonList] = useState([]);

  const { isLoading, error, sendRequest: fetchMovies } = useHttp();

  useEffect(() => {
    const transformMovies = (movies) => {
      const transformedMoviesArray = [];
      const { items } = movies;
      for (const key in items) {
        transformedMoviesArray.push({
          id: items[key].id,
          directors: items[key].directors,
          title: items[key].title,
          genres: items[key].genres,
          image: items[key].image,
          plot: items[key].plot,
          releaseState: items[key].releaseState,
          stars: items[key].stars,
          year: items[key].year,
        });
        setMoviesComingSoonList(transformedMoviesArray);
      }
    };
    fetchMovies(
      { url: "https://imdb-api.com/en/API/ComingSoon/k_i0sj17yx" },
      transformMovies
    );
  }, [fetchMovies]);
  const content = isLoading ? (
    <Loader />
  ) : (
    <ul className={classes['movie-items']}>
      {moviesComingSoonList.map((item) => (
        <MovieItem
          key={item.id}
          item={{
            id: item.id,
            directors: item.directors,
            title: item.title,
            genres: item.genres,
            image: item.image,
            plot: item.plot,
            releaseState: item.releaseState,
            stars: item.stars,
            year: item.year,
          }}
					
        />
      ))}
    </ul>
  );

  return (
    <section className={classes['coming-soon']}>
      <h2>Coming Soon...</h2>
      {error && <p>{error}</p>}
      <div>{content}</div>
    </section>
  );
};

export default MoviesComingSoon;
