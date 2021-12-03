import { React } from "./deps.js";
import App from "./app.js";

function getRootElement(environmentContext) {
  const rootElement = React.createElement(
    App,
    { env: environmentContext },
    null,
  );

  return rootElement;
}

const exports = {
  getRootElement,
};

export { exports as default };
