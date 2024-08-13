const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('Hello Sam It\'s Works !!!!')
})

app.listen(port, () => {
  console.log(`Sam app's listening on port ${port}`)
})