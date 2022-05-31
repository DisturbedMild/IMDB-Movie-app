import { Fragment } from "react";
import TopMovies from '../components/movies/TopMovies/TopMovies';
const TopFilmsPage = () => {
		return (
			<Fragment>
				<h1>Top 250 Films of IMDB</h1>	
				<TopMovies/>	
			</Fragment>
		)
}

export default TopFilmsPage;