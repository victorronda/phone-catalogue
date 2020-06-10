import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const ProductDetail = ({ phones, id }) => {
	const phone = phones.filter((phone) => phone.id === Number(id))[0];

	return (
		<div>
			{phone ? (
				<div className="container d-flex justify-content-center align-center rounded-lg my-3">
					<div className="row text-center shadow-lg">
						<div className="col-lg-4 col-md-6 col-sm-8 bg-light rounded-lg">
							<img
								className="img-fluid"
								src={phone.imageFileName}
								alt={phone.name}
								width="auto"
								height="300"
							/>
						</div>
						<div className="card col-lg-8 col-md-6 col-sm-8 pt-3">
							<h1 className="mb-3 mt-3">{phone.name}</h1>
							<h3 className="mb-4 mt-2">{phone.price}€</h3>
							<h5>Technical specifications</h5>
							<p className="mt-2">
								<b>Manufacturer: </b> {phone.manufacturer}
							</p>
							<p>
								<b>Color: </b> {phone.color}
							</p>
							<p>
								<b>Screen: </b> {phone.screen}
							</p>
							<p>
								<b>Processor: </b> {phone.processor}
							</p>
							<hr />
							<h5>Description</h5>
							<p className="mt-2">{phone.description}</p>
							<Link className="btn btn-info w-25 mx-auto my-3" to="/">
								Go back
							</Link>
						</div>
					</div>
				</div>
			) : (
				<div class="d-flex justify-content-center">
					<div class="spinner-border text-danger" style={{ width: '5rem', height: '5rem' }} role="status">
						<span class="sr-only">Loading...</span>
					</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		phones: state.requestAllProducts.phones
	};
};

export default connect(mapStateToProps, {})(ProductDetail);
