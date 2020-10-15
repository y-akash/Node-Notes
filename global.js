// Global object in node are different than Global object in window

// In node we can't do DOM manipulation
// for example=> 
// console.log(document.querySelector);

// But we can use some other global object like setTimeout, setInterval etc.

let example=setTimeout(()=>{
    console.log("SetTimeout");
},1000);

console.log(global);
