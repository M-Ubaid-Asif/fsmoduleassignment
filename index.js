const fs = require('fs');

const filename = process.argv[2] || 'test.txt';
const writedata = process.argv[3] || 'this is test data';

const crud =()=>{

    fs.writeFile(filename,writedata,(err)=>{
        if(err){
            console.log(err);
        }
    })
    
    fs.readFile(filename,'utf-8',(err,data)=>{
        console.log(data)
    })
    fs.appendFile(filename,`\nthis is append data`,(err)=>{
        if(err){
            console.log(err);
        }
        
    })
    
    
    
    
}

crud();

