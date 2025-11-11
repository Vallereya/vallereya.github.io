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
            // root
            $src:           path.resolve("./src"),
            $static:        path.resolve("./static"),
            $docs:          path.resolve("./docs"),

            // src sub dirs
            $routes:        path.resolve("./src/routes"),
            $params:        path.resolve("./src/params"),
            $stores:        path.resolve("./src/stores"),
            // $lib:           path.resolve("./src/lib"), (already included in svelte)

            // src lib sub dirs
            $assets:        path.resolve("./src/lib/assets"),
            $modules:       path.resolve("./src/lib/modules"),
            $components:    path.resolve("./src/lib/components"),
            
            // src lib assets sub dirs
            $audios:        path.resolve("./src/lib/assets/audios"),
            $fonts:         path.resolve("./src/lib/assets/fonts"),
            $icons:         path.resolve("./src/lib/assets/icons"),
            $images:        path.resolve("./src/lib/assets/images"),
            $logos:         path.resolve("./src/lib/assets/logos"),
            $videos:        path.resolve("./src/lib/assets/videos"),

            // src lib modules sub dirs
            $html:          path.resolve("./src/lib/modules/html"),

            $css:           path.resolve("./src/lib/modules/css"),
            $themes:        path.resolve("./src/lib/modules/css/themes"),
            $animations:    path.resolve("./src/lib/modules/css/animations"),

            $js:            path.resolve("./src/lib/modules/js"),
            $ts:            path.resolve("./src/lib/modules/js/ts"),

            $ds:            path.resolve("./src/lib/modules/ds"),
            $eds:           path.resolve("./src/lib/modules/ds/eds"),
            $forge:         path.resolve("./src/lib/modules/ds/forge"),
        },
        paths: {
            base: ""
        },
    },
	extensions: [
        '.svelte', 
        '.svx'
    ]
};

export default config;
