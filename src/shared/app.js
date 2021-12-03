import { html } from "./deps.js";

function App(props) {
  return html`<h1>Hello world from ${props.env?.platform ?? "nowhere"}</h1>`;
}

export { App as default };
