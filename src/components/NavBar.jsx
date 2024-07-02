import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<ul className="list-group">
			<Link to="/">
				<li className="list-group-item">Home</li>
			</Link>
			<Link to="/shop">
				<li className="list-group-item">Shop</li>
			</Link>
		</ul>
	);
};

export default NavBar;
