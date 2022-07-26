import { getCurrentDirectory, renderTemplate } from "../server/mod.js";
import { streams } from "../server/deps.js";

async function main() {
	const reader = await renderTemplate("index", {
		content: "",
	});

	const output = await streams.readAll(reader);
	const decoded = new TextDecoder().decode(output);

	const cwd = getCurrentDirectory();
	const target = `${cwd}/../../public/index.html`;

	await Deno.writeTextFile(target, decoded);
}

main();
