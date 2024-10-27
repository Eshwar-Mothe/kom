import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import ProductData from '../ProductData.json';

const Home = ({ addToCart, addToWishlist }) => {
	const [shop, setShop] = useState([]);
	const [news, setNews] = useState([]);

	useEffect(() => {
		setShop(ProductData);
		setNews(ProductData);
	}, []);

	return (
		<div>
			<Header setShop={setShop} news={news} />
			<ProductCard shop={shop} addToCart={addToCart} addToWishlist={addToWishlist} />
		</div>
	);
};

export default Home;
