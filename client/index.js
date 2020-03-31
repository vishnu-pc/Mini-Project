import * as tf from '@tensorflow/tfjs'

import { MnistData } from './function'
import { TITLE } from './config'

// This is the entrypoint for the client side code
// Your code goes here
document.title = TITLE

async function showExamples(data) {
	// Create a container in the visor
	const surface = tfvis.visor().surface({ name: 'Input Data Examples', tab: 'Input Data' })

	// Get the examples
	const examples = data.nextTestBatch(20)
	const numExamples = examples.xs.shape[0]

	// Create a canvas element to render each example
	for (let i = 0; i < numExamples; i += 1) {
		const imageTensor = tf.tidy(() => (
		// Reshape the image to 28x28 px
			examples.xs
				.slice([i, 0], [1, examples.xs.shape[1]])
				.reshape([28, 28, 1])
		))

		const canvas = document.createElement('canvas')
		canvas.width = 28
		canvas.height = 28
		canvas.style = 'margin: 4px;'
		// eslint-disable-next-line no-await-in-loop
		await tf.browser.toPixels(imageTensor, canvas)
		surface.drawArea.appendChild(canvas)

		imageTensor.dispose()
	}
}

async function run() {
	const data = new MnistData()
	await data.load()
	await showExamples(data)
}

document.addEventListener('DOMContentLoaded', run)
