const http = require('http');
const fs = require('fs');


const server= http.createServer((req,res)=>{
    console.log('Request Made');
    console.log(req.url, req.method);

    // set Header Content type
    res.setHeader('Content-Type', 'text/html');

    //Snding a HTML file
    fs.readFile('./views/index.html',(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    });
});


server.listen(3000,(err)=>{
    if(!err){
        console.log('Listning to port 3000');
    }
});