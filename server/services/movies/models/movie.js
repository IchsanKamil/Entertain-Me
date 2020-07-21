const db = require('../config/mongo')
const Movie = db.collection(process.env.COLLECTION_NAME)
const { ObjectId } = require('mongodb')

class MovieModel {
  static create(newMovie) {
    return Movie.insertOne(newMovie)
  }

  static findAll() {
    return Movie.find().toArray()
  }

  static findOne(id) {
    return Movie.findOne({ _id: ObjectId(id) })
  }
  
  static update(id, updateData) {
    return Movie.findOneAndUpdate(
      { _id: ObjectId(id) },
      { $set: updateData },
      { returnOriginal: false }
    )
  }

  static destroy(id) {
    return Movie.deleteOne({ _id: ObjectId(id) })
  }
}

module.exports = MovieModel