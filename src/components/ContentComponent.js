import React from "react";

import "./styles/ContentComponent.css";

const Home = React.lazy(() => import("./routes/HomeRouteComponent"));
const Projects = React.lazy(() => import("./routes/ProjectsRouteComponent"));

export default function ContentComponent({ route }) {
	const render = route => {
		switch (route.toLowerCase()) {
			case "projects":
				return <Projects />;
			default:
				return <Home />;
		}
	};

	return render(route);
}
