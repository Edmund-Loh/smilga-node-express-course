//import the express module
const express = require('express')
//and then invoke the express() function
const app = express()

app.get('/', (req, res) => {
  console.log('user hit the / resource')
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  console.log('user hit the /about resource')
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
