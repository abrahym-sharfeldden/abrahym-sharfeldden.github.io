import React from "react";

import "./styles/FooterComponent.css";

export default function FooterComponent() {
	return (
		<footer className="footer-container">
			<div className="grid name">
				<h1>Abrahym Sharf Eldden</h1>
			</div>
			<div className="grid title">
				<p>Software Developer</p>
			</div>
			<div className="grid location">
				<p>New York, NY</p>
			</div>
			<div className="grid email">
				<a href="mailto: asharfeldden@gmail.com">asharfeldden@gmail.com</a>
			</div>
			<div className="grid footer-nav">
				<nav>
					<ul>
						<li>
							<a href="#">home</a>
						</li>
						<li>
							<a href="#">about</a>
						</li>
						<li>
							<a href="#">projects</a>
						</li>
						<li>
							<a href="#">contact</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="grid socials">
				<ul>
					<li>
						<a href="https://www.linkedin.com/in/abrahym-sharfeldden/" className="icon fab fa-linkedin">
							<span className="label">LinkedIn</span>
						</a>
					</li>
					<li>
						<a href="https://github.com/abrahym-sharfeldden" className="icon fab fa-github">
							<span className="label">Github</span>
						</a>
					</li>
				</ul>
			</div>
			<div className="grid copyright">
				<p>Copyright &copy; 2022 Abrahym Sharf Eldden. All rights reserved.</p>
			</div>
			{/* <nav>
				<ul>
					<li>
						<div>
							<h1>Abrahym Sharf Eldden</h1>
							<p>Software Developer</p>
						</div>
					</li>
					<li>
						<div>
							<p>New York, NY</p>
							<p>asharfeldden@gmail.com</p>
						</div>
					</li>
					<li>
						<div>
							<p>New York, NY</p>
							<p>asharfeldden@gmail.com</p>
						</div>
					</li>
				</ul>
			</nav> */}
		</footer>
	);
}
