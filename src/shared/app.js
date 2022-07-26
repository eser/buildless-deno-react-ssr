import { html, Link, Route, Switch } from "./deps.js";

function Home(props) {
	return html`
    <h1>Hello world</h1>
    <p>
      this page rendered from ${props.env?.platform ?? "nowhere"}
      <br />
      <br />
      <${Link} to="/about">About me<//>
    </p>
  `;
}

function About(props) {
	return html`
    <h1>About me</h1>
    <p>
      this page is empty for now
    </p>
  `;
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
