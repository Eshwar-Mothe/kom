// src/components/Footer.js
import React from 'react';
import Navbar from 'react-bootstrap/Nav';

const Footer = () => {
	return (
		<Navbar sticky="bottom">
		<footer className="footer">
			<div className="footer">
				<h2>All rights reserved © {new Date().getFullYear()} Komal Potluri </h2>
			</div>
		</footer>
		</Navbar>
	);
};

export default Footer;
