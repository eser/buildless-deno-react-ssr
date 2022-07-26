import { html, Link, Route, SUI, Switch } from "./deps.js";

function Home(props) {
	return html`
    <${SUI.Container} text>
      <${SUI.Header} size="large">Hello world<//>
      <p>
        this page rendered from ${props.env?.platform ?? "nowhere"}
        <br />
        <br />
        <${SUI.Button} as=${Link} to="/about">About me<//>
      </p>
    <//>
  `;
}

function About(props) {
	return html`
    <${SUI.Container} text>
      <${SUI.Header} size="large">About me<//>
      <p>
        this page is empty for now
        <br />
        <br />
        <${SUI.Button} as=${Link} to="/">Go back<//>
      </p>
    <//>
  `;
}

function App(props) {
	return html`
    <${Switch}>
      <${Route} path="/about" exact strict>
        <${About} />
      <//>
      <${Route} path="/" exact strict>
        <${Home} ...${props} />
      <//>
    <//>
  `;
}

export { App as default };
