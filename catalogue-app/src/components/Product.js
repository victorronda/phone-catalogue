import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ phone }) => {

    
	return (
		<div>
			<Link to={`/details/${phone.id}`} phone={phone}>
				<img src={phone.imageFileName} alt="phone" />
				<h2>{phone.name}</h2>
				<h3>{phone.price} €</h3>
			</Link>
		</div>
	);
};



export default Product;
