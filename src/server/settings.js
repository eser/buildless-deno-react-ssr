const title = "buildless-deno-react-ssr project";

const staticMapping = {
	"/assets/scripts/browser/": { path: "src/browser/" },
	"/assets/scripts/shared/": { path: "src/shared/" },
	"/assets/": { path: "public/assets/" },
	"/service-worker.js": { path: "src/browser/service-worker.js" },
	"/favicon.ico": { path: "public/assets/favicon.ico" },
};

const port = 8080;

const settings = {
	title,
	staticMapping,
	port,
};

export { settings as default };
