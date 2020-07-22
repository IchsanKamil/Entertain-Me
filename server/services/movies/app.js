if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV == 'test') {
  require('dotenv').config()
}
const express = require('express');
const cors = require('cors');
const router = require('./routes')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors());
app.use(express.json());
app.get('/', (_, res) => res.json({ message: 'hello movies service ^^'}))
app.use(router)

app.listen(PORT, () => {
  console.log(`I Love You Movie ${PORT}`);
})