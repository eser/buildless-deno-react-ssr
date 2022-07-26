import { html } from "./deps.js";
import App from "./app.js";

function getRootElement(environmentContext) {
	const rootElement = html`<${App} env=${environmentContext} />`;

	return rootElement;
}

const exports = {
	getRootElement,
	html,
};

export { exports as default };
