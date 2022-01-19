const http = require('http');
const url = require('url');
const fs = require("fs");


http.createServer(function (req, res) {
    let urlParts = url.parse(req.url,true);
    
    if (req.method == 'GET') {
        switch (urlParts.pathname) {
            case "/":
                homepage(req, res);
                break;
            case "/users":
                about(req, res);
                break;
            default:
                page404(req,res);
                break;
        }
    }
    else if (req.method == 'POST') {
        switch (urlParts.pathname) {
            case "/users":
                user(req, res);
                break;
            default:
                page404(req,res);
                break;
        }
    }
    else {
        page404(req,res);
    }

}).listen(3000);
console.log("Server running at http://localhost:3000/");
    
function homepage(req, res) {
    
    res.end(fs.readFile("users.json", function(err, data) {
      
        // Check for errors
        if (err) throw err;
       
        // Converting to JSON
        const users = JSON.parse(data);
          
        console.log(users); // Print users 
    }));
}
function about(req, res) {
    res.end("users");
}
function user(req, res) {
    res.end("about user");
}
function page404(req, res) {
    res.end("404");
}


