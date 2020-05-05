const express = require('express')
const path = require('path')

const router = express.Router()

/* Get rout */
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'my-model/model.weights.bin'));
})

module.exports = router