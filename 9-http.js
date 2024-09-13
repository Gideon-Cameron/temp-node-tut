const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Ooops!</h1>
        <p>We Can't seem to find the page that 
        you are looking for</p></p>
        <a href="/">back home</a>
       `)
})

server.listen(5000)

//the url is http://localhost:5000/