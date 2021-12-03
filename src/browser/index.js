// deno-lint-ignore-file no-undef

import { ReactDom } from "./deps.js";

function renderRootComponent(shared, target) {
  const environmentContext = {
    platform: "browser",
  };

  const rootElement = shared.getRootElement(environmentContext);

  return ReactDom.hydrate(rootElement, target);
}

async function renderPage() {
  const shared = await import("../shared/mod.js");
  const target = document.getElementsByTagName("app")[0];

  renderRootComponent(shared.default, target);
}

renderPage();
