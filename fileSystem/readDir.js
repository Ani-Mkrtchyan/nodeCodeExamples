const fs = require("fs");

console.log( "File system directory " );
fs.readdir( "fileSystem", (err, files) => {
   if (err) {
      return console.error(err);
   }
   files.forEach((file) => {
      console.log( file );
   });
});
