import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Link className="text-decoration-none" to="/">
			<div className="d-flex justify-content-center py-2 my-2 text-light mx-auto">
				<h1 className="hover-title">Phone catalogue</h1>
			</div>
		</Link>
	);
};

export default Header;
