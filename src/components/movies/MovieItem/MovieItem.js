import classes from './MovieItem.module.css';

const MovieItem = ({ item }) => {
  return (
    <>
      <li className={classes['movie-item']}>
        <div className={classes['movie-item__img']}>
          <img src={item.image} alt={item.title} />
        </div>
        <p className={classes['movie-item__title']}>{item.title}</p>
        <p className={classes['movie-item__text']}>{`${item.releaseState}, ${item.year}`}</p>
      </li>
    </>
  );
};

export default MovieItem;
