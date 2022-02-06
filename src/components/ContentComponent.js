import React from "react";

import "./styles/ContentComponent.css";

const Home = React.lazy(() => import("./routes/Home"));
const About = React.lazy(() => import("./routes/About"));
const Projects = React.lazy(() => import("./routes/Projects"));
const Contact = React.lazy(() => import("./routes/Contact.js"));

export default function ContentComponent({ route }) {
	const render = (route) => {
		switch (route.toLowerCase()) {
			case "about":
				return <About />;
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
