import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ phone }) => {
	return (
		<div className="card w-25 m-4 text-center">
			<Link className="text-decoration-none text-dark" to={`/details/${phone.id}`} phone={phone}>
				<img className="card-img-top" src={phone.imageFileName} alt="phone" />
				<div className="card-body">
					<h2 className="card-title">{phone.name}</h2>
					<h3 lassName="card-title">{phone.price} €</h3>
				</div>
			</Link>
		</div>
	);
};

export default Product;
