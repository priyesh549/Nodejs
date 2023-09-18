const http = require('http');
const fs = require('fs')

let showMessage = false;

const server = http.createServer((req,res)=>{
    
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body>')
        if(showMessage){
            const content = fs.readFileSync('file.txt');
            res.write(`<div>${content}</div>`)
        }
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>')
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }

    if(url === "/message" && method === "POST"){
        const body = [];

        showMessage = true;

        req.on('data',(chunk)=>{
            body.push(chunk);
        })
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFileSync('file.txt',message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    }
});

server.listen(4000)