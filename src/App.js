import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Navbar from './components/Navbar';
import Bottom from './components/Bottom';

const App = () => {
	const [cartItems, setCartItems] = useState(() => {
		const savedCart = localStorage.getItem('cartItems');
		return savedCart ? JSON.parse(savedCart) : [];
	});
	const [wishlistItems, setWishlistItems] = useState(() => {
		const savedWishlist = localStorage.getItem('wishlistItems');
		return savedWishlist ? JSON.parse(savedWishlist) : [];
	});

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);

	useEffect(() => {
		localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
	}, [wishlistItems]);

	const addToCart = (product) => {
		const productInCart = cartItems.find((item) => item.id === product.id);
		if (productInCart) {
			setCartItems(cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
			toast.info(`${product.title} quantity increased.`);
		} else {
			setCartItems([...cartItems, { ...product, quantity: 1 }]);
			toast.success(`${product.title} added to the cart!`);
		}
	};

	const addToWishlist = (product) => {
		if (!wishlistItems.find((item) => item.id === product.id)) {
			setWishlistItems([...wishlistItems, product]);
			toast.success(`${product.title} added to the wishlist!`);
		}
	};

	const updateCart = (product, action) => {
		const updatedCart = cartItems.map((item) =>
			item.id === product.id ? { ...item, quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1 } : item
		);
		setCartItems(updatedCart.filter((item) => item.quantity > 0));
		toast.info(`${product.title} quantity ${action === 'increase' ? 'increased' : 'decreased'}.`);
	};

	const removeFromCart = (product) => {
		setCartItems(cartItems.filter((item) => item.id !== product.id));
		toast.warn(`${product.title} removed from the cart.`);
	};

	const moveToWishlist = (product) => {
		addToWishlist(product);
		removeFromCart(product);
		toast.info(`${product.title} moved to the wishlist.`);
	};

	const moveToCart = (product) => {
		addToCart(product);
		removeFromWishlist(product);
		toast.info(`${product.title} moved to the cart.`);
	};

	const removeFromWishlist = (product) => {
		setWishlistItems(wishlistItems.filter((item) => item.id !== product.id));
		toast.warn(`${product.title} removed from the wishlist.`);
	};

	// Calculate the total quantity of items in the cart
	const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

	return (
		<Router>
			<ToastContainer />
			<Navbar cartItemCount={cartItemCount} />
			<Routes>
				<Route path="/" element={<Home addToCart={addToCart} addToWishlist={addToWishlist} />} />
				<Route
					path="/cart"
					element={<Cart cartItems={cartItems} updateCart={updateCart} removeFromCart={removeFromCart} moveToWishlist={moveToWishlist} />}
				/>
				<Route
					path="/wishlist"
					element={<Wishlist wishlistItems={wishlistItems} moveToCart={moveToCart} removeFromWishlist={removeFromWishlist} />}
				/>
			</Routes>
			<Bottom/>
		</Router>
	);
};

export default App;
