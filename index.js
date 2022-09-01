const express = require('express')
const app = express()
const router = require('./src/router/index')
const db = require('./src/model/index')

app.use(db)
app.use(router)

app.listen(3000, () => {
  console.log('server ready')
})
