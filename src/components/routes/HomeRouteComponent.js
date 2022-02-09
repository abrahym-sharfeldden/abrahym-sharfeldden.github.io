import React from "react";

import "./styles/HomeRouteComponent.css";

export default function HomeRouteComponent() {
	return (
		<div className="content-container">
			<section className="content-section">
				<p>
					I'm a Full Stack Software Developer who is passionate about
					creating interactive applications and experiences for the
					web.
				</p>

				<div className="cta-container">
					<h1>Wanna talk? Let's connect!</h1>
					<ul>
						<li>
							<a
								name="linkedin"
								href="https://www.linkedin.com/in/abrahym-sharfeldden/"
								className="icon fab fa-linkedin">
								<span className="label">
									Abrahym Sharf Eldden's LinkedIn
								</span>
							</a>
						</li>
						<li>
							<a
								name="github"
								href="https://github.com/abrahym-sharfeldden"
								className="icon fab fa-github">
								<span className="label">
									Abrahym Sharf Eldden's Github
								</span>
							</a>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}
