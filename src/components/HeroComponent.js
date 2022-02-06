import React from "react";
import { NavigationComponent, ContentComponent } from "./";

export default function HeroComponent() {
	const [route, setRoute] = React.useState("/");

	const handleRouteChange = (newRoute) => setRoute(newRoute);

	return (
		<>
			<NavigationComponent onChange={handleRouteChange} />
			<ContentComponent route={route} />
		</>
	);
}
