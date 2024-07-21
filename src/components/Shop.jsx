import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import "../styles/shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
	const [items, setItems] = useState([]);
	const [cart, setCart] = useState(0);

	useEffect(() => {
		async function fetchItems() {
			const URL = "https://fakestoreapi.com/products";
			try {
				const res = await axios.get(URL);
				console.log(res.data);
				setItems(res.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchItems();
	}, []);

	const addToCart = () => {
		setCart(cart + 1);
	};

	const removeFromCart = () => {
		if (cart > 0) {
			setCart(cart - 1);
		}
	};

	if (!items) return <h3>Loading...</h3>;
	return (
		<>
			<NavBar />
			<Link to="/cart">
				<button className="cart-button">Cart</button>
			</Link>
			<h1>Shop Page</h1>
			<h3 className="cart-items-title">
				Number of items in cart: {cart}
			</h3>

			<ul className="shopping-list-items">
				{items.map((item, index) => (
					<li key={item.id}>
						<h3>{item.title}</h3>
						<p>Price: ${item.price}</p>
						{/* <p>Description: {item.description}</p> */}

						<img src={item.image} alt={index}></img>
						<h4 onClick={addToCart}>Add to Cart</h4>
						<h4 onClick={removeFromCart}>Remove from Cart</h4>
					</li>
				))}
			</ul>
		</>
	);
};

export default Shop;
