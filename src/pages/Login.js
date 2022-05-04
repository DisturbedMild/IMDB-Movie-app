import { Formik, Form, Field, ErrorMessage } from 'formik';

import classes from './Login.module.css';

const Login = () => {

	return (
		<div className={classes.login} >
			<h1>Login</h1>
			<Formik initialValues={{email: '', password: ''}}>
				<Form>
					<label htmlFor="email">Email</label>
					<Field id="email" name="email" placeholder="Email address" />
					<label htmlFor="password">Password</label>
					<Field id="password" name="password" placeholder="Password..." />
					<button type="submit">Login</button>
				</Form>
			</Formik>
		</div>
	)
}

export default Login;