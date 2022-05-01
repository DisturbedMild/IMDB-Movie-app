import { NavLink } from 'react-router-dom';
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <NavLink to='/home' className={classes.title}>Movies App</NavLink>
      <nav>
				<ul>
					{/* <li><NavLink href="/favorite">Favorite</NavLink></li>
					<li><NavLink href="/top">Top 250</NavLink></li>
          <li><NavLink href="/waiting">Waiting List</NavLink></li> */}
				</ul>
        <ul className={classes.actions}>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/registration">Register</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
