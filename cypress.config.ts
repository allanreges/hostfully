import { devServer } from "@cypress/vite-dev-server";
import { defineConfig } from "cypress";
import path from "path";

export default defineConfig({
  video: false,
  viewportWidth: 1000,
  viewportHeight: 900,

  e2e: {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    setupNodeEvents(on, config) {
      on("dev-server:start", options => {
        return devServer({
          ...options,
          viteConfig: {
            configFile: path.resolve(__dirname, "vite.config.ts"),
          },
        });
      });

      return config;
    },
    baseUrl: "http://localhost:3000",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
