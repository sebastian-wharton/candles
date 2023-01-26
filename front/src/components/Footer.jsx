import React from 'react';
import Logo from '../img/logo.svg';

const Footer = () => {
	return (
		<footer>
			<img
				src={Logo}
				alt=''
			/>
			<span>
				Made with ♥️ <b>@copyright Kai</b>.
			</span>
		</footer>
	);
};

export default Footer;
