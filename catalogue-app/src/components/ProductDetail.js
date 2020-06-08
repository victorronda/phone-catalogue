import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

const ProductDetail = ({ phones, id }) => {

	const phone = phones.filter(phone=>phone.id === Number(id))[0];

	return (
		<div>
			{phone ? (
				<div>
                    <img src={phone.imageFileName} alt={phone.name}/>
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

export default connect(mapStateToProps, {})(ProductDetail);
