import { h, render } from "preact";

import App from "./components/app";

import "./style/index.scss";

/**
 * Start the application.
 */
const start = (): void => {
	render(<App />, document.body);
};

/**
 * Include the debug code if it's a development build.
 */
if (process.env.NODE_ENV === "development") {
	/**
	 * Enable hot reloading.
	 */
	if (module.hot) {
		module.hot.accept("/App", () => requestAnimationFrame(start));
	}

	require("preact/debug");
}

/**
 * Let's start!
 */
start();
