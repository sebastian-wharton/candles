// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/authContext';
import Logo from '../img/logo.svg';

const Navbar = () => {
	// const { currentUser, logout } = useContext(AuthContext);

	return (
		<div className='navbar'>
			<div className='container'>
				<div className='logo'>
					<img
						src={Logo}
						alt='business logo'
					/>
				</div>
				<div className='links'>
					<Link
						className='link'
						to='/?cat=art'
					>
						<h6>Registration</h6>
					</Link>
					<Link
						className='link'
						to='/?cat=science'
					>
						<h6>Contact</h6>
					</Link>
					<Link
						className='link'
						to='/?cat=technology'
					>
						<h6>Store</h6>
					</Link>
					<Link
						className='link'
						to='/?cat=cinema'
					>
						<h6>Cart</h6>
					</Link>

					{/* <span>{currentUser?.username}</span>
					{currentUser ? (
						<span onClick={logout}>Logout</span>
					) : (
						<Link
							className='link'
							to='/login'
						>
							Login
						</Link>
					)} */}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
