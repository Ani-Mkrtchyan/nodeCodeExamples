// We need get information about files in folder and write it 
// in the other file

const fs =require('fs');
const path = require('path');

// get all files
function getAllFiles( dir, files ) {
    
    files = files || [];
      const allFiles = fs.readdirSync(dir);

      for (let i = 0; i < allFiles.length; i++) {
          let name = dir + '/' + allFiles[i];

          if (fs.statSync(name).isDirectory()) {
              getAllFiles (name, files);

          } else {

              files.push(name);

          }
          
      }
      return files;
     
  };

   // write information in the other file

  let result = getAllFiles("lesson1");
        result.forEach((file) => {
               
             fs.writeFile('p1', ` fileDir - ${file},     fileName - ${path.basename(file)}  file extname - ${path.extname(file)},  file size - ${fs.statSync(file).size} byte \n`, { flag: 'a+' },(err) => {});
            
            });

  