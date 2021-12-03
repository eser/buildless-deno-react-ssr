const staticMapping = {
  "/assets/scripts/browser/": { path: "src/browser/" },
  "/assets/scripts/shared/": { path: "src/shared/" },
  "/assets/": { path: "public/assets/" },
  "/service-worker.js": { path: "src/browser/service-worker.js" },
  "/favicon.ico": { path: "public/assets/favicon.ico" },
};

const port = 8000;

const settings = {
  staticMapping,
  port,
};

export { settings as default };
