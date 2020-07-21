const router = require('express').Router()
const movieRouter = require('./movie');
const tvRouter = require('./tv')

router.use('/movies', movieRouter);
router.use('/tv', tvRouter);
// router.use('/tv', tvRouter);

module.exports = router
