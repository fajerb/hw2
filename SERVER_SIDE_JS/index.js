const express = require('express')
const app = express()
const port = 3000
const path = require('path')




app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, './public', 'index.html'))
  })

  app.use(express.static('public'))

  app.get('/fajer', (req, res) => {
    res.sendFile(path.join(dirname, './public', 'fajer.html'))
  })

  app.post('/comment', (req, res) => {
    res.send('Got a POST request')
  })


app.listen(port, () => {
  console.log(Example app listening on port ${port})
})