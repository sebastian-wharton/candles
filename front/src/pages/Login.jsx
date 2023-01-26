import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className='auth'>
			<form>
				<h1>Login</h1>
				<input
					required
					type='text'
					placeholder='username'
				/>
				<input
					required
					type='password'
					placeholder='password'
				/>
				<button>Submit</button>
				<p>This is an error!</p>
				<span>
					Do you have an account?
					<Link to='/register'>Register</Link>
				</span>
			</form>
		</div>
	);
};

export default Login;
