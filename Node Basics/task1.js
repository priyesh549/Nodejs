const http = require('http');
const name = "Priyesh Pandey"
const PORT = 4000;


const server = http.createServer((req,res)=>{
    console.log(name)
})

server.listen(PORT);


