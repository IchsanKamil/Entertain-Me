const db = require('../config/mongo')
const TV_Series = db.collection(process.env.COLLECTION_NAME)
const { ObjectId } = require('mongodb')

class TV_SeriesModel {
  static create(newTV_Series) {
    return TV_Series.insertOne(newTV_Series)
  }

  static findAll() {
    return TV_Series.find().toArray()
  }

  static findOne(id) {
    return TV_Series.findOne({ _id: ObjectId(id) })
  }

  static update(id, updateData) {
    return TV_Series.updateOne(
      { _id: ObjectId(id) },
      { $set: updateData }
    )
  }

  static destroy(id) {
    return TV_Series.deleteOne({ _id: ObjectId(id) })
  }
}

module.exports = TV_SeriesModel