import classes from './TopMoviesItem.module.css';

const TopMoviesItem = (props) => {
	return <li className={classes['movie-item']} key={props.id}>
		<div>{props.rank}</div>
		<div>
			<img src={props.image} alt={props.title} />
		</div>
		<div>{props.title}</div>
	</li>
}
export default TopMoviesItem;