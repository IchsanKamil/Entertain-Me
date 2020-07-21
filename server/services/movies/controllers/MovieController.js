const Movie = require('../models/movie');

class MovieController {
  static create(req, res) {
    const newMovie = req.body

    Movie.create(newMovie)
      .then((movie) => {
        res.status(201).json(movie.ops[0])
      }).catch((err) => {
        console.log(err);
      });
  }
  
  static findAll(req, res) {
    Movie.findAll()
      .then((movies) => {
        res.status(200).json(movies)
      }).catch((err) => {
        console.log(err);
      });
  }

  static findOne(req, res) {
    const { id } = req.params

    Movie.findOne(id)
      .then((movie) => {
        res.status(200).json(movie)
      }).catch((err) => {
        console.log(err)
      });
  }
  
  static update(req, res) {
    const { id } = req.params
    const updateMovie = req.body

    Movie.update(id, updateMovie)
      .then((data) => {
        res.status(200).json(data.value)
      }).catch((err) => {
        console.log(err)
      });
  }
  
  static destroy(req, res) {
    const { id } = req.params
    
    Movie.destroy(id)
      .then(() => {
        res.status(200).json({
          message: 'Movie successfully deleted'
        })
      }).catch((err) => {
        console.log(err);
      });
  }
}

module.exports = MovieController