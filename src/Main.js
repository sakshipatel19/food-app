import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart from './components/Cart';
import ProductDetailpage from './components/ProductDetailPage';
import ProductListpage from './components/ProductListPage';

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={ProductListpage} />
			<Route path='/product/:productId' component={ProductDetailpage} />
			<Route exact path='/cart' component={Cart} />
		</Switch>
	</main>
);

export default Main;
