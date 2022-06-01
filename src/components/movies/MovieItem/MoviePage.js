import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import loginSlice from "../../../store/login-slice";

import classes from "./MoviePage.module.css";

const MoviePage = () => {
  const [movieItem, setMovieItem] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const [isMovieFavourite, setIsMovieFavourite] = useState(false);

  const dispatch = useDispatch();

  const { sendRequest: fetchMovies } = useHttp();

  const params = useParams();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
      
      dispatch(
        loginSlice.actions.login({
          isLogin: true,
          token: localStorage.getItem("token"),
        })
      );
    }
    const transformMovies = (movies) => {
      const { items } = movies;

      // eslint-disable-next-line
      const movie = items.find((item) => item.id === params.movieId);
      setMovieItem(movie);
    };
    
    fetchMovies(
      { url: "https://imdb-api.com/en/API/ComingSoon/k_i0sj17yx" },
      transformMovies
    );
    // eslint-disable-next-line
  }, [fetchMovies, params.movieId]);

  const addToFavouriteHandler = () => {
    setIsMovieFavourite(!isMovieFavourite);
  };

  let content = movieItem ? (
    <>
      <div className={classes["movie-img"]}>
        <img src={movieItem.image} alt="#" />
        {isLogin && (
          <div className={classes["movie-actions"]}>
            <button onClick={addToFavouriteHandler}>
              {!isMovieFavourite ? "Add to" : "Remove from"} favourite
            </button>
            <button>Add to waitlist</button>
          </div>
        )}
      </div>
      <div className={classes["movie-content"]}>
        <h1>{movieItem.fullTitle}</h1>
        <p>
          <span>Genres: </span>
          {movieItem.genres}
        </p>
        <p>
          <span>Release Date: </span>
          {movieItem.releaseState}, {movieItem.year}{" "}
        </p>
        <p>
          <span>Directors: </span>
          {movieItem.directors}
        </p>
        <p>
          <span>Stars: </span>
          {movieItem.stars}
        </p>
        <p>
          <span>Content Rating: </span>
          {movieItem.contentRating}
        </p>
        <p>
          <span>Runtime: </span>
          {movieItem.runtimeStr}
        </p>
        <p>
          <span>Description: </span>
          {movieItem.plot}
        </p>
      </div>
    </>
  ) : null;
  return <div className={classes.movie}>{content}</div>;
};

export default MoviePage;
