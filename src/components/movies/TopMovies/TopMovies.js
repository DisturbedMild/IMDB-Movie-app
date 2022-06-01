import { useEffect, useState } from 'react';
import useHttp from '../../../hooks/use-http';

import TopMoviesItem from './TopMoviesItem';
import classes from './TopMovies.module.css';
const TopMovies = () => {
	const [moviesArray, setMoviesArray] = useState([]);
	const { isLoading, error, sendRequest: fetchMovies } = useHttp();

	useEffect(() => {
		const AddMoviesToArray = (data) => {
			const transformMovies = [];
			
			data.items.forEach(movie =>  transformMovies.push(movie));
			setMoviesArray(transformMovies);
		}

		fetchMovies({ url: 'https://imdb-api.com/en/API/Top250Movies/k_i0sj17yx'}, AddMoviesToArray)
	}, [fetchMovies])

	return (
		<div className={classes.top}>
				{error ? error : ''}
				{isLoading ? 'Loading...' : (
					<ul className={classes['top-list']}>
						{moviesArray.map(movie => <TopMoviesItem id={movie.id} title={movie.title} image={movie.image} rank={movie.rank} />)}
					</ul>
				)}
		</div>
	)
}

export default TopMovies;