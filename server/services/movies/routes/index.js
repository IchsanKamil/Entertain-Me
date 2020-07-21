const router = require('express').Router()
const MovieController = require('../controllers/MovieController');

router.post('/movies', MovieController.create)
router.get('/movies', MovieController.findAll)
router.get('/movies/:id', MovieController.findOne)
router.put('/movies/:id', MovieController.update)
router.delete('/movies/:id', MovieController.destroy)

module.exports = router