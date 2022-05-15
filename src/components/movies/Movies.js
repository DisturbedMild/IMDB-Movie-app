import { useState, useEffect } from "react";

import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import MovieThumbnail from "./MovieItem/MovieThumbnail";
import classes from "./Movies.module.css";

const Movies = props => {
  const [moviesList, setMoviesList] = useState([]);

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
        setMoviesList(transformedMoviesArray);
      }
    };
    fetchMovies(
      { url: props.url },
      transformMovies
    );
  }, [fetchMovies, props.url]);
  const content = isLoading ? (
    <LoadingSpinner />
  ) : (moviesList.length === 0 ? <p className={classes['movies-error']}>Ooops, looks like no films right now. Please come later</p> :
    <ul className={classes['movie-items']}>
      {moviesList.map((item) => (
        <MovieThumbnail
          key={item.id}
          item={{
            id: item.id,
            title: item.title,
            image: item.image,
            releaseState: item.releaseState,
            year: item.year,
          }}
					
        />
      ))}
    </ul>
  );

  return (
    <section className={classes[`movies ${props.className}`]}>
      <h2 className={classes['movies-header']}>{props.title}</h2>
      {error && <p>{error}</p>}
      <div>{content}</div>
    </section>
  );
};

export default Movies;
