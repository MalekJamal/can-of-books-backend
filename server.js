"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const BookModel = require("./modules/booksDB");
const addNewBook = require("./modules/addNewBook");
const deleteBook = require("./modules/deleteBook");
const updateBook = require("./modules/updateBook");
const books = require("./data");

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Welcome to my Books server!");
});
app.get("/books", handleBooks); // we should name the route without s, but here I'm follow the requirment
app.post("/books", addNewBook);
app.delete("/books/:id", deleteBook);
app.put("/books/:id", updateBook); // to update existing record

// books.book1.save();
// books.book2.save();
// books.book3.save();
function handleBooks(req, res) {
  BookModel.find({}, (error, data) => {
    error
      ? console.log(`Erorr reading from the DataBase: ${error}`)
      : res.send(data);
  });
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
