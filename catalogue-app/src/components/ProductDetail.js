import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

const ProductDetail = ({ phones }) => {
	const { id } = useParams();
	const phone = phones[id];

	return (
		<div>
			{phone ? (
				<div>
                    <img src={phone.imageFileName} alt=""/>
					<h1>{phone.name}</h1>
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

export default connect(mapStateToProps, null)(ProductDetail);
