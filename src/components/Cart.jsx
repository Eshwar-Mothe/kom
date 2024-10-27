import React from 'react';

const Cart = ({ cartItems, updateCart, removeFromCart, moveToWishlist }) => {
	const calculateTotal = () => {
		return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
	};

	return (
		<div className="cart-container">
			<h2>Your Cart</h2>
			{cartItems.length > 0 ? (
				<div>
					{cartItems.map((item, i) => (
						<div key={i} className="cart-item">
							<p className="item-title">{item.title}</p>
							<p className="item-price">Price: {item.price} $</p>
							<p className="item-quantity">Quantity: {item.quantity}</p>
							<div className="item-buttons">
								<button className="update-button" onClick={() => updateCart(item, 'increase')}>
									+
								</button>
								<button className="update-button" onClick={() => updateCart(item, 'decrease')}>
									-
								</button>
								<button className="remove-button" onClick={() => removeFromCart(item)}>
									Remove
								</button>
								<button className="wishlist-button" onClick={() => moveToWishlist(item)}>
									Move to Wishlist
								</button>
							</div>
						</div>
					))}
					<h3 className="total-price">Total Price: {calculateTotal()} $</h3>
				</div>
			) : (
				<p className="cart-empty-message">Your cart is empty.</p>
			)}
		</div>
	);
};

export default Cart;
