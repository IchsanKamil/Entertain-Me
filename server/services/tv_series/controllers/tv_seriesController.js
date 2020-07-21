const TV_Series = require('../models/tv_series');

class TV_SeriesController {
  static create(req, res) {
    const newTV_Series = req.body

    TV_Series.create(newTV_Series)
      .then((TV_Series) => {
        res.status(201).json(TV_Series.ops[0])
      }).catch((err) => {
        console.log(err);
      });
  }
  
  static findAll(req, res) {
    TV_Series.findAll()
      .then((TV_Seriess) => {
        res.status(200).json(TV_Seriess)
      }).catch((err) => {
        console.log(err);
      });
  }

  static findOne(req, res) {
    const { id } = req.params

    TV_Series.findOne(id)
      .then((TV_Series) => {
        res.status(200).json(TV_Series)
      }).catch((err) => {
        console.log(err)
      });
  }
  
  static update(req, res) {
    const { id } = req.params
    const updateTV_Series = req.body

    TV_Series.update(id, updateTV_Series)
      .then(() => {
        res.status(200).json(updateTV_Series)
      }).catch((err) => {
        console.log(err)
      });
  }
  
  static destroy(req, res) {
    const { id } = req.params
    
    TV_Series.destroy(id)
      .then(() => {
        res.status(200).json({
          message: 'TV_Series successfully deleted'
        })
      }).catch((err) => {
        console.log(err);
      });
  }
}

module.exports = TV_SeriesController