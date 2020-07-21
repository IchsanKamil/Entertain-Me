const router = require('express').Router()
const axios = require('axios')

const url = process.env.TV_SERIES_SERVICES_PATH
// findAll
router.get('/', (req, res) => {
  axios.get(url)
  .then((result) => {
    res.status(200).json(result.data)
  }).catch((err) => {
    console.log(err);
  });
});
// create
router.post('/', (req, res) => {
  const newTv = req.body

  axios.post(url, newTv)
  .then((result) => {
    res.status(200).json(result.data)
  }).catch((err) => {
    console.log(err);
  });
});
// findOne
router.get('/:id', (req, res) => {
  const { id } = req.params

  axios.get(url + `/${id}`)
  .then((result) => {
    res.status(200).json(result.data)
  }).catch((err) => {
    console.log(err);
  });
});
// update
router.put('/:id', (req, res) => {
  const { id } = req.params
  const updateTv = req.body

  axios.put(url + `/${id}`, updateTv)
  .then((result) => {
    res.status(200).json(result.data)
  }).catch((err) => {
    console.log(err);
  });
});
// delete
router.delete('/:id', (req, res) => {
  const { id } = req.params

  axios.delete(url + `/${id}`)
  .then((result) => {
    res.status(200).json(result.data)
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router