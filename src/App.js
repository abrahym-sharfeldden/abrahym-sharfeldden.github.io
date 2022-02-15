import React from "react";
import pdf from "./resume.pdf";
import "the-new-css-reset/css/reset.css";
import "normalize.css";
import "./App.css";

const App = () => {
	return (
		<section className="container">
			<div className="header">
				<div className="image-container"></div>
			</div>
			<div className="content">
				<h1>Abrahym Sharf Eldden</h1>
				<p>Software Developer</p>

				<a
					href="./#"
					className="btn-ghost btn-strong-style light-blue"
					onClick={() => {
						window.open(pdf);
					}}>
					<i className="fa-memo"></i> Resume
				</a>
				{/* <button className="button" >
					<i className="fa-solid fa-memo"></i>Resume
				</button> */}

				<ul>
					<li>
						<a
							name="linkedin"
							href="https://www.linkedin.com/in/abrahym-sharfeldden/"
							className="fab fa-linkedin fa-2x"
							target="_blank"
							rel="noopener noreferrer">
							<span className="label">
								Abrahym Sharf Eldden's LinkedIn
							</span>
						</a>
					</li>
					<li>
						<a
							name="github"
							href="https://github.com/abrahym-sharfeldden"
							className="fab fa-github fa-2x"
							target="_blank"
							rel="noopener noreferrer">
							<span className="label">
								Abrahym Sharf Eldden's Github
							</span>
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default App;
