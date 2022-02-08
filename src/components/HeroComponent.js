import React from "react";
import { NavigationComponent, ContentComponent } from "./";

export default function HeroComponent() {
	const [route, setRoute] = React.useState("projects");

	const handleRouteChange = (newRoute) => setRoute(newRoute);

	return (
		<>
			<NavigationComponent route={route} onChange={handleRouteChange} />
			<ContentComponent route={route} />
		</>
	);
}
