import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ phone }) => {
	return (
		<div className="card m-4 text-center rounded-lg shadow-lg hover-card" style={{ width: '16em' }}>
			<Link className="text-decoration-none text-dark" to={`/details/${phone.id}`} phone={phone}>
				<img className="card-img-top" src={phone.imageFileName} alt="phone" width="auto" height="280" />
				<div className="card-body">
					<h2 className="card-title">{phone.name}</h2>
					<h3 className="card-subtitle">{phone.price} €</h3>
				</div>
			</Link>
		</div>
	);
};

export default Product;
