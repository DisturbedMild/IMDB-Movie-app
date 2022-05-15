import { Link } from "react-router-dom";
import classes from "./MovieThumbnail.module.css";

const MovieThumbnail = ({ item }) => {
  return (
    <li className={classes["movie-item"]}>
      <div className={classes["movie-item__img"]}>
        <img src={item.image} alt={item.title} />
      </div>
      <Link to={`/movies/movie/${item.id}`}>
        <p className={classes["movie-item__title"]}>{item.title}</p>
      </Link>
      <p
        className={classes["movie-item__text"]}
      >{`${item.releaseState}, ${item.year}`}</p>
    </li>
  );
};

export default MovieThumbnail;
