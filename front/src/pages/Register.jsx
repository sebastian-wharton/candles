import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className='auth'>
			<form>
				<h1>Register</h1>
				<input
					required
					type='email'
					placeholder='email'
				/>
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
					<Link to='/login'>Login</Link>
				</span>
			</form>
		</div>
	);
};

export default Register;
