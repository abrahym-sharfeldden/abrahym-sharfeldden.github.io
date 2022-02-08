import React from "react";

import "./styles/ProjectsRouteComponent.css";

import data from "./PROJECTS.json";

export default function ProjectsRouteComponent() {
	const renderData = () => {
		return data.map((project, index) => (
			<article className="card" key={index}>
				{/* <div className="card-image"></div> */}
				<header className="card-text">
					<h1>{project.name}</h1>
					<p>{project.description}</p>
				</header>
				<div className="tools-section">
					<ul>
						{project.tools.map((tool, index) => (
							<li className="tags" key={index}>
								<a href="/#">{tool}</a>
							</li>
						))}
					</ul>
				</div>
				<div className="card-info">
					<div className="info live-server">
						<a
							className="icon fas fa-tv"
							name="github_repo"
							href={project.live_server}
							target="_blank"
							rel="noopener noreferrer">
							<br />
							<span className="label">Live Server</span>
						</a>
					</div>
					<div className="info code">
						<a
							className="icon fas fa-code"
							name=""
							href={project.github_repo}
							target="_blank"
							rel="noopener noreferrer">
							<br />
							<span className="label">Code</span>
						</a>
					</div>
				</div>
			</article>
		));
	};

	return (
		<div className="content-container">
			<section className="content-section projects-section">
				{renderData()}
			</section>
		</div>
	);
}
