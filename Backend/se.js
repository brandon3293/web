const http = require('http');

const server = http.createServer((req,res)=> {
    if(req.url === '/'){
        res.write('Hello Brandon');
        res.write('\nThis is your own server');
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.write('This is a list of offerings');
        res.end();
    }
});

server.listen(400);
console.log("Listening on port 400 ...");