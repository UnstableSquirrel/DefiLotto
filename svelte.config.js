// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
// 		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
// 		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
// 		adapter: adapter()
// 	}
// };

// export default config;

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			// pages: 'build',
			// assets: 'build',
			pages: 'public',
			assets: 'public',
			fallback: undefined,
			precompress: false,
			strict: true,
		}),
		prerender: {
			entries: [
				'/',
				"/about",
				"/my-page",
				"/winners",
				'/contests/0', 
				'/contests/1', 
				'/contests/2', 
				'/contests/3', 
				'/contests/4',
				'/contests/5',
				'/contests/6',
				'/contests/7',
				'/contests/8',
				'/contests/9',
				'/contests/10',
				'/contests/11'
			]
		}
	}
};