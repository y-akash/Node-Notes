const express= require('express');

// Creating an express app
const app= express();


// Routing
app.get('/',(req,res)=>{
    // res.send('Hello Ninjas');
    res.sendFile('./views/index.html', {root:__dirname});
});

app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html', {root:__dirname});
});

// Redirects
app.get('/about-me',(req,res)=>{
    res.redirect('/about');
});

// 404 Error 
// this is middelware it will run or use for every incoming request when the code will reach to this point 
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html', {root:__dirname});
});

// Listen to port
app.listen(3000,(err)=>{
    if(!err){
        console.log('Listning to port 3000');
    }
});