const http = require('http');

const server= http.createServer((req,res)=>{
    console.log('Request Made');
    console.log(req.url, req.method);

    // set Header Content type
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello ninjas');
    res.write('Hello again ninjas');
    res.end();


    // if ther is only 1 time we have to write than we can directly use res.end()
    // for Example
    // res.end("If only 1 time we have to write");
});


server.listen(3000,(err)=>{
    if(!err){
        console.log('Listning to port 3000');
    }
});