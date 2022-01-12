const fs = require("fs");
const path = require("path");

function deleteFolder(path) {
    let files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
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
   deleteFolder(path);


   //--------------------------------
   // in use since 2019
   /**
const fs =require("fs");

  fs.rmdirSync(path, { 
    recursive: true 
    });
    */


