import { TITLE, TIMEOUT } from './config'

async function main() {
	// This is the entrypoint for the client side code
	// Your code goes here
	document.title = TITLE
	const descriptionEle = document.getElementById('description')
	descriptionEle.innerText = `The spinner is just for show. It will go away in ${TIMEOUT / 1000} seconds`

	// Lets make that spinner go away
	setTimeout(() => {
		const spinnerEle = document.getElementById('demo-spinner')

		spinnerEle.parentNode.removeChild(spinnerEle)
		descriptionEle.innerText = 'And the spinner is gone!'
	}, TIMEOUT)
}

main()
