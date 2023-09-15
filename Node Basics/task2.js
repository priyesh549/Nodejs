const http = require('http');
const PORT = 4000;


const server = http.createServer((req,res)=>{
    // console.log(req.url)
    res.setHeader('Content-Type','text/html')
    if(req.url === '/home'){
        // res.write('Welcome home')
        res.write('<html>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>')
    }

    else if(req.url === '/about'){
        res.write('<html>')
        res.write('<body><h1>Welcome to About Us</h1></body>')
        res.write('</html>')
    }

    else if(req.url === '/node'){
        res.write('<html>')
        res.write('<body><h1>Welcome to my Nodejs Project</h1></body>')
        res.write('</html>')
    }

    else{
        res.write('<html>')
        res.write('<body><h1>Error</h1></body>')
        res.write('</html>')
    }


    res.end()
})

server.listen(PORT);


