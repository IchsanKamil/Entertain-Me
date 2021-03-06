const { MongoClient } = require('mongodb');
const dbUrl = process.env.DB_URL || 'mongodb://mongo:27017'
const dbName = process.env.DATABASE_NAME
const client = new MongoClient(dbUrl, { useUnifiedTopology: true })

client.connect();

const db = client.db(dbName)

module.exports = db