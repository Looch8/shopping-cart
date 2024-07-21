import App from "./src/App";
import Homepage from "./src/components/Homepage";
import Shop from "./src/components/Shop";
import Cart from "./src/components/Cart";

const routes = [
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/shop",
		element: <Shop />,
	},
	{
		path: "/cart",
		element: <Cart />,
	},
];

export default routes;
