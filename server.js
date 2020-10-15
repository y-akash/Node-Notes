const http = require('http');

const server= http.createServer((req,res)=>{
    console.log('Request Made');
    console.log(req.url, req.method);

    // set Header Content type
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello ninjas');
    res.write('Hello again ninjas');
    res.end();
});


server.listen(3000,(err)=>{
    if(!err){
        console.log('Listning to port 3000');
    }
});