import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItemCount }) => {
	return (
		<nav className="navbar">
			<div className="navbar-brand">
				<h2>Fashion Store</h2>
			</div>
			<ul className="navbar-links">
				<li>
					<Link to="/" className="nav-link">
						Product List
					</Link>
				</li>
				<li>
					<Link to="/cart" className="nav-link">
						Cart
						{cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
					</Link>
				</li>
				<li>
					<Link to="/wishlist" className="nav-link">
						Wishlist
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
