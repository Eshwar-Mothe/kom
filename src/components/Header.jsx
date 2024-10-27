import React, { useEffect, useState } from 'react';
import categoriesData from '../ProductCategories.json';

const Header = ({ setShop, news }) => {
	const [buttons, setButtons] = useState([]);

	useEffect(() => {
		setButtons(categoriesData);
	}, []);

	const btnFilter = (list) => {
		setShop(news.filter((item, i) => item.category === list));
	};

	return (
		<div>
			<h1>Products List</h1>
			<div className="btns">
				<button className="focus" onClick={() => setShop(news)}>
					All
				</button>
				{buttons.map((item, i) => (
					<button key={i} className="focus" onClick={() => btnFilter(item)}>
						{item}
					</button>
				))}
			</div>
		</div>
	);
};

export default Header;
