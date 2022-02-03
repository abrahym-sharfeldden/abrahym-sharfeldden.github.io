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
						<li>01 | home</li>
						<li>02 | about</li>
						<li>03 | projects</li>
						<li>04 | contact</li>
					</ul>
				</nav>
			</div>
			<div className="grid socials">
				<ul>
					<li>LinkedIn Icon</li>
					<li>GitHub Icon</li>
				</ul>
			</div>
			<div className="grid copyright">
				<p>© Abrahym Sharf Eldden</p>
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
