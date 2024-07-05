import App from "./src/App";
import Homepage from "./src/components/Homepage";
import Shop from "./src/components/Shop";

const routes = [
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/shop",
		element: <Shop />,
	},
];

export default routes;
