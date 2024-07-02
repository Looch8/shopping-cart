import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<ul className="list-group">
			<li className="list-group-item">
				<Link to="/">Home</Link>
			</li>
			<li className="list-group-item">
				<Link to="/shop">Shop</Link>
			</li>
		</ul>
	);
};

export default NavBar;
