import { html, log } from "./deps.js";
import App from "./app.js";

function getRootElement(environmentContext) {
	const rootElement = html`<${App} env=${environmentContext} />`;

	return rootElement;
}

function configureLogger() {
	return log.setup({
		handlers: {
			console: new log.handlers.ConsoleHandler("DEBUG"),
		},

		loggers: {
			// configure default logger available via short-hand methods above.
			default: {
				level: "DEBUG",
				handlers: ["console"],
			},

			tasks: {
				level: "ERROR",
				handlers: ["console"],
			},
		},
	});
}

const exports = {
	getRootElement,
	configureLogger,
	html,
	log,
};

export { exports as default };
