const express= require('express');

// Creating an express app
const app= express();

// set view engine
app.set('view engine','ejs');   // Express will automatically check in views folder for file.
// if we want to put another name instead of views than we have use below code to specify out folder name
// app.set('views','myViewName');

// Routing
app.get('/', (req, res) => {
    const blogs = [
      {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs });
  });
  
  app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });
  
  app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });
  
  // 404 page
  app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });

// Listen to port
app.listen(3000,(err)=>{
    if(!err){
        console.log('Listning to port 3000');
    }
});