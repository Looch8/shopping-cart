import App from "./src/App";
import Shop from "./src/components/Shop";

const routes = [
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/shop",
		element: <Shop />,
	},
];

export default routes;
