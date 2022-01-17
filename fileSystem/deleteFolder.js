const fs = require("fs");
const path = require("path");

function deleteFolder(path) {

    if( fs.existsSync(path) ) {
       const files = fs.readdirSync(path);
        files.forEach((file) => {
            let curPath = path + "/" + file;
            if ( fs.statSync(curPath).isDirectory() ) {
                deleteFolder(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
   }
   deleteFolder("test");


   //--------------------------------
   // in use since 2019
   /**
const fs =require("fs");

  fs.rmdirSync(path, { 
    recursive: true 
    });
    */


//---------------------------------------------
// this function delete onli file

// const fs = require('fs');
// const path = require('path');

// const directory = 'test';

// fs.readdir(directory, (err, files) => {
//   if (err) throw err;

//   for (const file of files) {
//     fs.unlink(path.join(directory, file), err => {
//       if (err) throw err;
//     });
//   }
// }); 