import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "%s - Freebetcoin Admin",
      title: "Dashboard",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  nitro: {
    plugins: ["@/server/index.ts"],
  },

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["@/assets/index.css", "@fortawesome/fontawesome-svg-core/styles.css"],

  typescript: {
    tsConfig: {
      compilerOptions: {
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
      },
    },
  },

  vite: {
    ssr: {
      noExternal: ["@heroicons/vue"],
    },
  },
});
