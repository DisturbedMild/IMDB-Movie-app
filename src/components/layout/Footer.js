import GitHubIcon from '../UI/GitHubIcon';
import TwitterIcon from '../UI/TwitterIcon';
import LinkedInIcon from '../UI/LinkedInIcon';

import classes from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={classes.footer}>
				<div className={classes.inner}>
				<span>©Copyright 2022. All Rights Reserved.</span>
				<div className={classes.links}>
					<a href='https://github.com/DisturbedMild' target='_blank'><GitHubIcon /></a>
					<a href='https://www.linkedin.com/in/vladyslav-dmytrenko-757a79180' target='_blank'><LinkedInIcon /></a>
					<a href='https://twitter.com/RaYofParadise' target='_blank'><TwitterIcon /></a>
				</div>
				</div>
		</footer>
	)
}

export default Footer;