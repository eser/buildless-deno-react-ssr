import * as esbuild from "https://deno.land/x/esbuild@v0.14.53/mod.js";

const ts = "let test: boolean = true;";

const result = await esbuild.transform(ts, { loader: "ts" });

console.log("result:", result);

esbuild.stop();
