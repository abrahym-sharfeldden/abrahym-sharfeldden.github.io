import React, { Suspense } from "react";

import { LeftTabComponent, HeroComponent, FooterComponent } from "./components";

import "the-new-css-reset/css/reset.css";
import "./App.css";

const App = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<HeroComponent />
			<LeftTabComponent />
			<FooterComponent />
		</Suspense>
	);
};

export default App;
