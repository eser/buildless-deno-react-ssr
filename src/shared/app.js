import { html, Link, Route, Switch } from "./deps.js";

function Home(props) {
	return html`<h1>
    Hello world from ${props.env?.platform ?? "nowhere"}
    <br />
    <br />
    <${Link} to="/about">About me<//>
  </h1>`;
}

function About(props) {
	return html`<h1>About me</h1>`;
}

function App(props) {
	return html`
    <${Switch}>
      <${Route} path="/about">
        <${About} />
      <//>
      <${Route} path="/">
        <${Home} ...${props} />
      <//>
    <//>
  `;
}

export { App as default };
