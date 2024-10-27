import React, { useState } from 'react';

const ProductCard = ({ shop, addToCart, addToWishlist, moveToCart, removeFromWishlist, isWishlist }) => {
	const [activeCardIndex, setActiveCardIndex] = useState(null);

	const cardShow = (index) => {
		if (activeCardIndex === index) {
			setActiveCardIndex(null);
		} else {
			setActiveCardIndex(index);
		}
	};

	return (
		<div>
			<div className="cards-main">
				{shop.map((item, i) => (
					<div className="cards" key={i}>
						<div className="title">
							<p>{item.title}</p>
							{isWishlist ? (
								<>
									<div class="btn-wrap">
										<button className="move-to-cart" onClick={() => moveToCart(item)}>
											Move to Cart
										</button>
										<button className="remove-from-wishlist" onClick={() => removeFromWishlist(item)}>
											Remove
										</button>
									</div>
								</>
							) : (
								<>
									<div class="btn-wrap">
										<button className="add-to-cart" onClick={() => addToCart(item)}>
											Add to Cart
										</button>
										<button className="add-to-wishlist" onClick={() => addToWishlist(item)}>
											Add to Wishlist
										</button>
									</div>
								</>
							)}
						</div>
						<p className="price">{item.price} $</p>
						<div>
							<div className="img-card">
								{activeCardIndex === i ? (
									<div className="text">
										<p>{item.description}</p>
										<img src={item.image} alt={item.title} />
									</div>
								) : (
									<img src={item.image} alt={item.title} />
								)}
								<button className="info" onClick={() => cardShow(i)}>
									{activeCardIndex === i ? 'Hide Info' : 'Info'}
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductCard;
