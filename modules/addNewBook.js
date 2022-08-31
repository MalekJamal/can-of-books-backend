"use stricit";
const BookModel = require("./booksDB");

function addNewBook(req, res) {
  try {
    const { newBook } = req.body;
    const book = BookModel(newBook);
    book.save();
    res.status(201).json(book);
  } catch (error) {
    res.send(`Erorr reading from the DataBase: ${error}`);
  }
}

module.exports = addNewBook;
