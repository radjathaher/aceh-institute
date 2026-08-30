// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://aceh-institute.pages.dev",
  output: "static",
  compressHTML: false,
  trailingSlash: "always",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
    routing: { prefixDefaultLocale: false },
  },
  build: { format: "directory" },
});
