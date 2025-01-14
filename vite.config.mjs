import fs from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { nodeExternals } from "rollup-plugin-node-externals";
import typescript from "@rollup/plugin-typescript";

// find directories in src that starts with 'ebay-'
let componentEntries = fs
    .readdirSync("./src")
    .filter((file) => fs.statSync(`./src/${file}`).isDirectory() && file.startsWith("ebay-"))
    .reduce((acc, componentName) => {
        acc[componentName] = resolve(__dirname, `src/${componentName}/index.ts`);
        return acc;
    }, {
        events: resolve(__dirname, 'src/events/index.ts'),
        utils: resolve(__dirname, 'src/utils/index.ts'),
    });

export default defineConfig({
    build: {
        lib: {
            entry: componentEntries,
            fileName: "[name]/index",
            // Use CommonJS only until we upgrade all packages that uses ui-core-react to use ESM.
            // If we use ESM, the bundle might have both ESM and CJS, which will increase the bundle size,
            // and might cause reference issues.
            formats: ["cjs"],
        },
        rollupOptions: {
            plugins: [nodeExternals(), typescript()],
        },
    },
});
