// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";
import alpinejs from "@astrojs/alpinejs";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // site: "https://your-domain.com",
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify(),
  integrations: [icon(), alpinejs(), partytown(), sitemap()],
});
