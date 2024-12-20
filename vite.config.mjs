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

        // DEPRECATED (should be used internally only)
        'common/component-utils': resolve(__dirname, 'src/common/component-utils/index.ts'),
        'common/component-utils/forwardRef': resolve(__dirname, 'src/common/component-utils/forwardRef.tsx'),
        'common/component-utils/utils': resolve(__dirname, 'src/common/component-utils/utils.ts'),
        'common/event-utils': resolve(__dirname, 'src/common/event-utils/index.ts'),
        'common/floating-label-utils/hooks': resolve(__dirname, 'src/common/floating-label-utils/hooks.tsx'),
        'common/notice-utils/notice-cta': resolve(__dirname, 'src/common/notice-utils/notice-cta.tsx'),
        'common/random-id': resolve(__dirname, 'src/common/random-id.ts'),
        'common/tooltip-utils': resolve(__dirname, 'src/common/tooltip-utils/index.ts'),
        'common/tooltip-utils/constants': resolve(__dirname, 'src/common/tooltip-utils/constants.ts'),
        'ebay-radio/radio': resolve(__dirname, 'src/ebay-radio/radio.tsx'),
        'ebay-fake-menu-button/menu-button': resolve(__dirname, 'src/ebay-fake-menu-button/menu-button.tsx'),
        'ebay-fake-menu/menu-item': resolve(__dirname, 'src/ebay-fake-menu/menu-item.tsx'),
        'ebay-dialog-base/components/animation': resolve(__dirname, 'src/ebay-dialog-base/components/animation.ts'),
        'ebay-dialog-base/components/dialog-footer': resolve(__dirname, 'src/ebay-dialog-base/components/dialog-footer.tsx'),
        'ebay-dialog-base/components/dialog-header': resolve(__dirname, 'src/ebay-dialog-base/components/dialog-header.tsx'),
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
            plugins: [nodeExternals({
                // Makeup packages are not properly bundled with ESM, so we exclude them from the external list.
                exclude: [/^makeup-/]
            }), typescript()],
        },
    },
});
