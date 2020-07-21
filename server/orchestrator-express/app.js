if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV == 'test') {
  require('dotenv').config()
}
const express = require('express')
const router = require('./routes')

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log(`I Love You ${PORT}`);
})