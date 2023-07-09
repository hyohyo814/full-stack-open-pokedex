
const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

//eslint-disable-next-line
app.get('/health', (req, res) => {
  throw 'error'
  res.send('ok')
})

app.listen(PORT, () => {
  //eslint-disable-next-line
  console.log('server started on port 5000')
})
