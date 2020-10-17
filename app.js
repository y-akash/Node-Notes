const express= require('express');

// Creating an express app
const app= express();

// set view engine
app.set('view engine','ejs');

//Middelware
app.use((req,res,next)=>{
    console.log('Custom middelware');
    // after running at this line express does not know how to move on next middelware automaticaly therefore we have to explicitly specify so we use next() to move ahead
    next();     
});

app.use(express.static('public'));


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