const http = require('http') 
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req,res) =>{
    //lodash
    const num = _.random(0,30)
    console.log(num)

    const greet = _.once(() => {
        console.log('welcome')
    })

    greet()
    greet()

    //header starts here
    res.setHeader('Content-Type','text/html')

    //setting up pages for response
    let path = ('./view/')
    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = '200'
            break
        case '/about':
            path += 'about.html'
            res.statusCode = '200'
            break
        case '/about-me':
            res.setHeader('Location','/about')
            res.statusCode = '301'
            res.end()
            break
        default:
            path += 'error.html'
            res.statusCode = '404'
            break
    }

    //html page to be sent
    fs.readFile(path,(error,data) => {
        if(error) {
            console.log(error)
            res.end()
        }
        else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000,'localhost',() =>{
    console.log('server is listening on port 3000')
})
