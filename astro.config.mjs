import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        react(),
    ],
    vite: {
        resolve: {
            alias: {
                "@": "/src",
            },
        },
    },
    adapter: vercel({ imageService: true }),
});
