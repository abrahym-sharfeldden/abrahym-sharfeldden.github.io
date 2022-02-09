import React from "react";

import "./styles/NavigationComponent.css";

export default function NavigationComponent(props) {
	const [active, setActive] = React.useState("");

	const handleClick = event => {
		event.preventDefault();
		const dataRoute = String(event.target.getAttribute("data-route"));

		props.onChange(dataRoute);
		setActive(dataRoute);
	};

	return (
		<header className="header-container">
			<nav className="header-nav">
				<ul>
					<li
						className={active === "home" ? "active" : null}
						data-route="home"
						onClick={handleClick}>
						<a href="/">Home</a>
					</li>
					<li
						className={active === "projects" ? "active" : null}
						data-route="projects"
						onClick={handleClick}>
						<a href="/">projects</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
