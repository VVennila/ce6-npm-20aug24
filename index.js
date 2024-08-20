const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome Vennila')
})

app.listen(3001)