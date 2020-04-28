import React from 'react';
import './assets/scss/style.scss';
import { Home } from './app/home';
import Unsplash from 'unsplash-js';

export const unsplash = new Unsplash({
	accessKey: `${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
});

function App() {
	return (
		<Home />
	);
}

export default App;
