import React from "react";

import "./styles/ContentComponent.css";

const Home = React.lazy(() => import("./routes/HomeRouteComponent"));
const Skills = React.lazy(() => import("./routes/SkillsRouteComponent"));
const Projects = React.lazy(() => import("./routes/ProjectsRouteComponent"));
const Contact = React.lazy(() => import("./routes/ContactRouteComponent"));

export default function ContentComponent({ route }) {
	const render = route => {
		switch (route.toLowerCase()) {
			// case "skills":
			// 	return <Skills />;
			case "projects":
				return <Projects />;
			case "Contact":
				return <Contact />;
			default:
				return <Home />;
		}
	};

	return render(route);
}
