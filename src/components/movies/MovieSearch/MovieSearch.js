
import SearchIcon from './SearchIcon';
import classes from './MovieSearch.module.css';

const MovieSearch = () => {
  return (
    <div className={classes.search}>
      <input type="text" placeholder="Search film..." ></input>
      <SearchIcon />
    </div>
  );
};

export default MovieSearch;
