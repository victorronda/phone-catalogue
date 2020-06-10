import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { requestAllProducts } from '../../redux/actions/actions';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';
import ProductDetail from '../ProductDetail/ProductDetail';

const Home = memo(({ phones, isPending, request }) => {
	useEffect(
		() => {
			request();
		},
		[ request ]
	);

	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route
					exact
					path="/"
					render={() =>
						isPending ? (
							<div className="d-flex justify-content-center">
								<div
									className="spinner-border text-danger"
									style={{ width: '5rem', height: '5rem' }}
									role="status"
								>
									<span className="sr-only">Loading...</span>
								</div>
							</div>
						) : (
							<ProductList phones={phones} />
						)}
				/>
				<Route
					path="/details/:id"
					render={(props) => <ProductDetail id={props.match.params.id} phones={phones} />}
				/>
			</Switch>
		</BrowserRouter>
	);
});

const mapStateToProps = (state) => {
	return {
		phones: state.requestAllProducts.phones,
		isPending: state.requestAllProducts.isPending
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		request: () => dispatch(requestAllProducts())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
