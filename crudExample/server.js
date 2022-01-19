const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const port = 3000;

let books = [
  {
    id:1,
    name:"Java Script"
  },

  {
    id:2,
    name: "Node.js"
  },

  {
    id:3,
    name: "Design patterns"
  }
];

app.get('/', (req,res) =>{
  res.send('Hello API');
});

app.listen(port, ()=> {
  console.log("API app started");
});


app.get('/books', (req,res) => {
  res.send(books);
});

app.get('/books/:id', (req,res) => {
 let book = books.find((book)=>{
 return book.id = Number(req.params.id);
  });
  res.send(book);
});

app.post('/books', (req, res) =>{

  let book ={
id:Date.now(),
name:req.body.name,
  };

  books.push(book);
  //console.log(req.body);
  res.send (book);
 
});

app.put('/books/:id',(req,res) => {
  let book = books.find((book)=>{
    return book.id = Number(req.params.id);
     });
     book.name = req.body.name;
     //res.send(book);
     res.sendStatus(200);
});

app.delete('/books/:id',(req,res)=>{
  books = books.filter((book)=>{
return book.id !==Number(req.params.id);
  });
  res.sendStatus(200);
});