// vite.config.mjs
import fs from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "file:///Users/arath/ebayui-core-react/node_modules/vite/dist/node/index.js";
import { nodeExternals } from "file:///Users/arath/ebayui-core-react/node_modules/rollup-plugin-node-externals/dist/index.js";
import typescript from "file:///Users/arath/ebayui-core-react/node_modules/@rollup/plugin-typescript/dist/es/index.js";
import { cjsInterop } from "file:///Users/arath/ebayui-core-react/node_modules/vite-plugin-cjs-interop/dist/index.js";
var __vite_injected_original_dirname = "/Users/arath/ebayui-core-react";
var componentEntries = fs.readdirSync("./src").filter((file) => fs.statSync(`./src/${file}`).isDirectory() && file.startsWith("ebay-")).reduce((acc, componentName) => {
  acc[componentName] = resolve(__vite_injected_original_dirname, `src/${componentName}/index.ts`);
  return acc;
}, {
  events: resolve(__vite_injected_original_dirname, "src/events/index.ts"),
  utils: resolve(__vite_injected_original_dirname, "src/utils/index.ts")
});
var vite_config_default = defineConfig({
  plugins: [
    // This plugin will automatically unwrap the default export from CJS dependencies that are specified in the list.
    // https://github.com/eBay/ebayui-core-react/issues/420
    cjsInterop({
      // By default this plugin is only for SSR vite build, here we are in library mode, so we enable "client"
      client: true,
      dependencies: [
        "makeup-expander",
        "makeup-typeahead"
      ]
    })
  ],
  build: {
    lib: {
      entry: componentEntries,
      fileName: "[name]/index",
      // Use CommonJS only until we upgrade all packages that uses ui-core-react to use ESM.
      // If we use ESM, the bundle might have both ESM and CJS, which will increase the bundle size,
      // and might cause reference issues.
      formats: ["cjs"]
    },
    rollupOptions: {
      plugins: [nodeExternals(), typescript()]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2FyYXRoL2ViYXl1aS1jb3JlLXJlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYXJhdGgvZWJheXVpLWNvcmUtcmVhY3Qvdml0ZS5jb25maWcubWpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hcmF0aC9lYmF5dWktY29yZS1yZWFjdC92aXRlLmNvbmZpZy5tanNcIjtpbXBvcnQgZnMgZnJvbSBcIm5vZGU6ZnNcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgbm9kZUV4dGVybmFscyB9IGZyb20gXCJyb2xsdXAtcGx1Z2luLW5vZGUtZXh0ZXJuYWxzXCI7XG5pbXBvcnQgdHlwZXNjcmlwdCBmcm9tIFwiQHJvbGx1cC9wbHVnaW4tdHlwZXNjcmlwdFwiO1xuaW1wb3J0IHsgY2pzSW50ZXJvcCB9IGZyb20gXCJ2aXRlLXBsdWdpbi1janMtaW50ZXJvcFwiXG5cbi8vIGZpbmQgZGlyZWN0b3JpZXMgaW4gc3JjIHRoYXQgc3RhcnRzIHdpdGggJ2ViYXktJ1xubGV0IGNvbXBvbmVudEVudHJpZXMgPSBmc1xuICAgIC5yZWFkZGlyU3luYyhcIi4vc3JjXCIpXG4gICAgLmZpbHRlcigoZmlsZSkgPT4gZnMuc3RhdFN5bmMoYC4vc3JjLyR7ZmlsZX1gKS5pc0RpcmVjdG9yeSgpICYmIGZpbGUuc3RhcnRzV2l0aChcImViYXktXCIpKVxuICAgIC5yZWR1Y2UoKGFjYywgY29tcG9uZW50TmFtZSkgPT4ge1xuICAgICAgICBhY2NbY29tcG9uZW50TmFtZV0gPSByZXNvbHZlKF9fZGlybmFtZSwgYHNyYy8ke2NvbXBvbmVudE5hbWV9L2luZGV4LnRzYCk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge1xuICAgICAgICBldmVudHM6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2V2ZW50cy9pbmRleC50cycpLFxuICAgICAgICB1dGlsczogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvdXRpbHMvaW5kZXgudHMnKSxcbiAgICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIC8vIFRoaXMgcGx1Z2luIHdpbGwgYXV0b21hdGljYWxseSB1bndyYXAgdGhlIGRlZmF1bHQgZXhwb3J0IGZyb20gQ0pTIGRlcGVuZGVuY2llcyB0aGF0IGFyZSBzcGVjaWZpZWQgaW4gdGhlIGxpc3QuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lQmF5L2ViYXl1aS1jb3JlLXJlYWN0L2lzc3Vlcy80MjBcbiAgICAgICAgY2pzSW50ZXJvcCh7XG4gICAgICAgICAgICAvLyBCeSBkZWZhdWx0IHRoaXMgcGx1Z2luIGlzIG9ubHkgZm9yIFNTUiB2aXRlIGJ1aWxkLCBoZXJlIHdlIGFyZSBpbiBsaWJyYXJ5IG1vZGUsIHNvIHdlIGVuYWJsZSBcImNsaWVudFwiXG4gICAgICAgICAgICBjbGllbnQ6IHRydWUsXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFtcbiAgICAgICAgICAgICAgICAnbWFrZXVwLWV4cGFuZGVyJyxcbiAgICAgICAgICAgICAgICAnbWFrZXVwLXR5cGVhaGVhZCcsXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pXG4gICAgXSxcbiAgICBidWlsZDoge1xuICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgIGVudHJ5OiBjb21wb25lbnRFbnRyaWVzLFxuICAgICAgICAgICAgZmlsZU5hbWU6IFwiW25hbWVdL2luZGV4XCIsXG4gICAgICAgICAgICAvLyBVc2UgQ29tbW9uSlMgb25seSB1bnRpbCB3ZSB1cGdyYWRlIGFsbCBwYWNrYWdlcyB0aGF0IHVzZXMgdWktY29yZS1yZWFjdCB0byB1c2UgRVNNLlxuICAgICAgICAgICAgLy8gSWYgd2UgdXNlIEVTTSwgdGhlIGJ1bmRsZSBtaWdodCBoYXZlIGJvdGggRVNNIGFuZCBDSlMsIHdoaWNoIHdpbGwgaW5jcmVhc2UgdGhlIGJ1bmRsZSBzaXplLFxuICAgICAgICAgICAgLy8gYW5kIG1pZ2h0IGNhdXNlIHJlZmVyZW5jZSBpc3N1ZXMuXG4gICAgICAgICAgICBmb3JtYXRzOiBbXCJjanNcIl0sXG4gICAgICAgIH0sXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHBsdWdpbnM6IFtub2RlRXh0ZXJuYWxzKCksIHR5cGVzY3JpcHQoKV0sXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4USxPQUFPLFFBQVE7QUFDN1IsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMscUJBQXFCO0FBQzlCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsa0JBQWtCO0FBTDNCLElBQU0sbUNBQW1DO0FBUXpDLElBQUksbUJBQW1CLEdBQ2xCLFlBQVksT0FBTyxFQUNuQixPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsU0FBUyxJQUFJLEVBQUUsRUFBRSxZQUFZLEtBQUssS0FBSyxXQUFXLE9BQU8sQ0FBQyxFQUN2RixPQUFPLENBQUMsS0FBSyxrQkFBa0I7QUFDNUIsTUFBSSxhQUFhLElBQUksUUFBUSxrQ0FBVyxPQUFPLGFBQWEsV0FBVztBQUN2RSxTQUFPO0FBQ1gsR0FBRztBQUFBLEVBQ0MsUUFBUSxRQUFRLGtDQUFXLHFCQUFxQjtBQUFBLEVBQ2hELE9BQU8sUUFBUSxrQ0FBVyxvQkFBb0I7QUFDbEQsQ0FBQztBQUVMLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQTtBQUFBO0FBQUEsSUFHTCxXQUFXO0FBQUE7QUFBQSxNQUVQLFFBQVE7QUFBQSxNQUNSLGNBQWM7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSCxLQUFLO0FBQUEsTUFDRCxPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJVixTQUFTLENBQUMsS0FBSztBQUFBLElBQ25CO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDWCxTQUFTLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQztBQUFBLElBQzNDO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
