import React from "react";

import "./styles/NavigationComponent.css";

export default function NavigationComponent(props) {
	const handleClick = (event) => {
		event.preventDefault();
		props.onChange(event.target.name);
	};

	return (
		<header className="header-container">
			<nav className="header-nav">
				<ul>
					<li>
						<a href="/" name="home" onClick={handleClick}>
							Home
						</a>
					</li>
					<li>
						<a href="/" name="about" onClick={handleClick}>
							About
						</a>
					</li>
					<li>
						<a href="/" name="projects" onClick={handleClick}>
							projects
						</a>
					</li>
					<li>
						<a href="/" name="contact" onClick={handleClick}>
							contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
