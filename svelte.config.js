import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from "path";

/** @type {import('@sveltejs/kit').Config} */

const config = {
	preprocess: [
        vitePreprocess(), 
        mdsvex()
    ],
	kit: { 
        adapter: adapter(),
        alias: {
            $src: path.resolve("./src"),
            $static: path.resolve("./static"),
            $routes: path.resolve("./src/routes"),
            $params: path.resolve("./src/params"),
            $stores: path.resolve("./src/stores"),
            $assets: path.resolve("./src/lib/assets"),
            $modules: path.resolve("./src/lib/modules"),
            $components: path.resolve("./src/lib/components"),
            $fonts: path.resolve("./src/lib/assets/fonts"),
            $icons: path.resolve("./src/lib/assets/icons"),
            $logos: path.resolve("./src/lib/assets/logos"),
            $videos: path.resolve("./src/lib/assets/videos"),
            $images: path.resolve("./src/lib/assets/images"),
            $audios: path.resolve("./src/lib/assets/audios"),
            $css: path.resolve("./src/lib/modules/css"),
            $ts: path.resolve("./src/lib/modules/ts"),
            $html: path.resolve("./src/lib/modules/html"),
        },
        paths: {
            
        }
    },
	extensions: [
        '.svelte', 
        '.svx'
    ]
};

export default config;
