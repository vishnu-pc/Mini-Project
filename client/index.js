import handwritten_model from './function'
import { TITLE, TIMEOUT } from './config'

async function main() {
	// This is the entrypoint for the client side code
	// Your code goes here
	document.title = TITLE
	handwritten_model()
}

main()
