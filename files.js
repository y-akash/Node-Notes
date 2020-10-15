const fs=require('fs');

// ******************************Reading a File******************************
fs.readFile('./docs/blog.txt',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});



// ******************************Writing a File******************************
fs.writeFile('./docs/blog.txt','Anything you want to write comes here',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Success');
    }
});



// ******************************Directories******************************
if(fs.existsSync('./docs/newFolder')){
    fs.rmdir('./docs/newFolder',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Removed the directory');
        }
    });
}else{
    fs.mkdir('./docs/newFolder',(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Created Successfully.');
        }
    });
}



// ******************************Deleting a Files******************************
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Deleted Successfully');
        }
    });
}else{
    console.log('File does not exist.');
}



