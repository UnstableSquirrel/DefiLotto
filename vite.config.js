import { sveltekit } from '@sveltejs/kit/vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), nodePolyfills()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}.']
	}
};

export default config;
