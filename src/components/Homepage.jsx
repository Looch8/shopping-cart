import NavBar from "./NavBar";
import "../styles/Homepage.css";
import shoppingCartImage from "../images/shopping-cart.avif";

const Homepage = () => {
	return (
		<>
			<NavBar />
			<h1 className="homepage-title">Shopping Cart</h1>
			<div className="homepage-container">
				<p className="homepage-info_section">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Accusamus quidem eveniet odit atque adipisci, eum quis
					facilis quo quia odio similique delectus iste, soluta vitae
					ullam nisi eaque fugiat in? Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Perspiciatis aperiam, quae ut
					vel ex accusantium voluptas rerum tempora suscipit omnis
					excepturi, quas minima, impedit quos et non maxime dolorum
					nostrum.
				</p>
				<img className="homepage-image" src={shoppingCartImage}></img>
			</div>
		</>
	);
};

export default Homepage;
