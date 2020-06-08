import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { requestAllProducts } from '../redux/actions/allProductsActions';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import Header from './Header';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

const Home = memo(({ phones, isPending, request }) => {

	useEffect(() => {
		request();
	}, [request]);

	return (
		<div>
			<BrowserRouter>
				<Header />
                <Switch>
                    <Route exact path='/' render={()=>( isPending ? <ClipLoader /> : <ProductList phones={phones}/>) } />
                    <Route path='/details/:id' render={(props)=>(<ProductDetail id={props.match.params.id} phones={phones}/>)} />
                </Switch>
			</BrowserRouter>
		</div>
	);
});

const mapStateToProps = state => {
	return {
		phones: state.requestAllProducts.phones,
		isPending: state.requestAllProducts.isPending
	};
};

const mapDispatchToProps = dispatch => {
	return {
		request: () => dispatch(requestAllProducts())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
