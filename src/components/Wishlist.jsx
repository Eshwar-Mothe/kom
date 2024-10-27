import React from 'react';
import ProductCard from './ProductCard';

const Wishlist = ({ wishlistItems, moveToCart, removeFromWishlist }) => {
	return (
		<div className="wishlist-container">
			<h2>Your Wishlist</h2>
			{wishlistItems.length > 0 ? (
				<ProductCard shop={wishlistItems} moveToCart={moveToCart} removeFromWishlist={removeFromWishlist} isWishlist />
			) : (
				<p className="wishlist-empty-message">Your wishlist is empty.</p>
			)}
		</div>
	);
};

export default Wishlist;
