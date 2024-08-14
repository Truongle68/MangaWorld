const express = require('express')
const { saveNewBook, fetchBooks, changeBookStatus } = require('../controllers/bookControllers')
const router = express.Router()

router.route('/').post(saveNewBook).get(fetchBooks)
router.route('/edit').put(changeBookStatus)

module.exports = router