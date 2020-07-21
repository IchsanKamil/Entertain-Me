const router = require('express').Router()
const TV_SeriesController = require('../controllers/tv_seriesController');

router.post('/tv_series', TV_SeriesController.create)
router.get('/tv_series', TV_SeriesController.findAll)
router.get('/tv_series/:id', TV_SeriesController.findOne)
router.put('/tv_series/:id', TV_SeriesController.update)
router.delete('/tv_series/:id', TV_SeriesController.destroy)

module.exports = router