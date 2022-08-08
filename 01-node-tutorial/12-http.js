const http = require('http')

const server = http.createServer((request, response) => {
  //   if (request.url === '/') {
  //     res.end('Welcome to our home page')
  //   }
  //   if (request.url === '/about') {
  //     res.end('Here is our short history')
  //   }
  //   response.end(`
  //   <h1>Oops!</h1>
  // <p>We can't seem to find the page you are looking for</p>
  // <a href="/">back home</a>
  //   `)
  // ###################################
  // ###################################
  //
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
  if (request.url === '/') {
    response.end('Welcome to our home page')
  } else if (req.url === '/about') {
    response.end('Here is our short history')
  } else {
    response.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(5000)
