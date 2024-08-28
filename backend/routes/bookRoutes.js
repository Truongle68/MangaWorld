const express = require('express')
const { saveNewManga, fetchMangas, changeMangaStatus } = require('../controllers/bookControllers')
const router = express.Router()

router.route('/').post(saveNewManga).get(fetchMangas)
router.route('/edit').put(changeMangaStatus)

module.exports = router