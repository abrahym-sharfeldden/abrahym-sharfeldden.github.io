import React, { Suspense } from "react";

import { LeftTabComponent, HeroComponent, FooterComponent } from "./components";

import "the-new-css-reset/css/reset.css";
import "normalize.css";
import "./App.css";

const App = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className="wrapper">
				<HeroComponent />
				{/* <LeftTabComponent /> */}
				<FooterComponent />
			</div>
		</Suspense>
	);
};

export default App;
