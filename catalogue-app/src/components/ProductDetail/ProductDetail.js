import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

const ProductDetail = ({ phones, id }) => {
	const phone = phones.filter((phone) => phone.id === Number(id))[0];

	return (
		<div className="container d-flex justify-content-center align-center" >
			{phone ? (
				<div className="row text-center" >
					<div className="col-lg-4 col-md-6 col-sm-8 ">
						<img className="img-fluid img-detail" src={phone.imageFileName} alt={phone.name} />
					</div>
					<div className="card col-lg-8 col-md-6 col-sm-8 ">
						<h1 className="">{phone.name}</h1>
						<h4 className="">{phone.price}€</h4>
						<h5>Technical specifications</h5>
						<p className=""> 
							<b>Manufacturer: </b> {phone.manufacturer}
						</p>
						<p className="">
							<b>Color: </b> {phone.color}
						</p>
						<p className="">
							<b>Screen: </b> {phone.screen}
						</p>
						<p className="">
							<b>Processor: </b> {phone.processor}
						</p>
						<hr/>
						<h5>Description</h5>
						<p>{phone.description}</p>

						<Link to="/">Go back</Link>
					</div>
				</div>
			) : (
				<ClipLoader />
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
