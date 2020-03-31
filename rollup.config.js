const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const alias = require('@rollup/plugin-alias')
const json = require('@rollup/plugin-json')
const path = require('path')

const projectRootDir = path.resolve(__dirname)

module.exports = [{
	input: 'client/index.js',
	output: {
		file: 'public/javascripts/main.js',
		format: 'es',
		sourcemap: true,
	},
	plugins: [
		resolve({ browser: true }),
		commonjs(),
		json(),
		alias({
			entries: {
				utils: path.resolve(projectRootDir, 'client/utils'),
			},
		}),
	],
	onwarn(message) {
		if (message.code === 'CIRCULAR_DEPENDENCY') {
			return
		}
		console.error(message.message)
	},
}]
