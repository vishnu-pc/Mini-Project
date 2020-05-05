const express = require('express')
const multer = require('multer');
const path = require('path')

// SET STORAGE
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'routes/my-model')
	},
	filename: function (req, file, cb) {
	  cb(null, file.fieldname)
	}
  })
   
  var upload = multer({ storage: storage })

const router = express.Router()

/* Get rout */
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'my-model/model.json'));
})

/* Post rout */
router.post('/upload', upload.any(), (req, res, next) => {
  const files = req.files
  if (!files) {
    const error = new Error('Please choose files')
    error.httpStatusCode = 400
    return next(error)
  }
 
    res.send(files)
  
})

module.exports = router
