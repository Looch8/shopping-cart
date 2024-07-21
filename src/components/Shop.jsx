import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import "../styles/shop.css";

const Shop = () => {
	const [items, setGetItems] = useState([]);
	const [cart, setCart] = useState(0);

	useEffect(() => {
		async function fetchItems() {
			const URL = "https://fakestoreapi.com/products";
			try {
				const res = await axios.get(URL);
				console.log(res.data);
				setGetItems(res.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchItems();
	}, []);

	if (!items) return <h3>Loading...</h3>;
	return (
		<>
			<NavBar />
			<h1>Shop Page</h1>
			<h3 className="cart-items-title">Number of items in cart: 0</h3>
			<div className="shopping-list-items-container">
				{items.map((item, index) => (
					<ul className="shopping-list-items">
						<li>
							<h3>{item.title}</h3>
							<p>Price: ${item.price}</p>
							{/* <p>Description: {item.description}</p> */}

							<img src={item.image} alt={index}></img>
						</li>
					</ul>
				))}
			</div>
		</>
	);
};

export default Shop;
