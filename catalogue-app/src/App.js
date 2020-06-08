import React from 'react';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
	return (
		<Provider store={store}>
			<Home />
		</Provider>
	);
}

export default App;
