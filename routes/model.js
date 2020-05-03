const express = require('express')
const path = require('path')

const router = express.Router()

/* Used for model routing */
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'my-model/model.json'));
})

module.exports = router
