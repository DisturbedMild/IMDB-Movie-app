import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../../hooks/use-http";

const MovieItem = () => {
  const [movieItem, setMovieItem] = useState();
  const params = useParams();

  const { sendRequest: fetchMovies } = useHttp();

  useEffect(() => {
    const transformMovies = (movies) => {
      const { items } = movies;
      const movie = items.find((item) => {
        if (item.id === params.movieId) {
          return item;
        } 
      });
      setMovieItem(movie);
    };
    fetchMovies(
      { url: "https://imdb-api.com/en/API/ComingSoon/k_i0sj17yx" },
      transformMovies
    );
  }, [fetchMovies, params.movieId]);
  return (
    <div>
      <h1>{movieItem.title}</h1>
			<div>
				<img src={movieItem.image} alt='#' />
				<p>{movieItem.plot}</p>
			</div>
    </div>
  );
};

export default MovieItem;
