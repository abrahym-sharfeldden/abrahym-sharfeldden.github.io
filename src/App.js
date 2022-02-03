import React from "react";
import { LeftTabComponent, ContentComponent, NavigationComponent, FooterComponent } from "./components";

// import "the-new-css-reset/css/reset.css";
import "./App.css";

const App = () => {
	return (
		<div className="wrapper">
			<NavigationComponent />
			<ContentComponent />
			<LeftTabComponent />
			<FooterComponent />
		</div>
	);
};

export default App;
