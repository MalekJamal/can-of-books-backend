'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const BookModel = require('./modules/booksDB');

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Welcome to my Books server!')
})



const book1 = new BookModel({
  title:"Clean Code",
  description:"The clean code offers invaluable insights into code cleaning and software development. It has thorough, step-by-step explanations on cleaning, writing, and refactoring code...",
  status:"Programming"
});
const book2 = new BookModel({
  title:"Design Patterns: Elements of Reusable Object-Oriented Software",
  description:"Design Patterns are typical solutions to commonly occurring problems in software design. They are blueprints that you can customize to solve a particular ...",
  status:"Software Design Patterns"
});
const book3 = new BookModel({
  title:"User Stories Applied",
  description:"User Stories Applied: For Agile Software Development is a book written by Mike Cohn. The book represents an effective means of gathering requirements from the customer...",
  status:"Agile Software Development"
});

app.get('/books',handleBooks);

function handleBooks(req,res){
  
  BookModel.find({},(error,data)=>{
    error? console.log(`Erorr reading from the DataBase: ${error}`):res.send(data)
  })
}

// Save to DataBase
book1.save()
book2.save()
book3.save()
app.listen(PORT, () => console.log(`listening on ${PORT}`));
