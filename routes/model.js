const express = require('express')

const router = express.Router()

/* Used for model routing */
router.get('/', (req, res) => {
	res.send('respond with a resource')
})

module.exports = router
