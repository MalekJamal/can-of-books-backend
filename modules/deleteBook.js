"use stricit";

const BookModel = require("./booksDB");
// delete book by ID
function deleteBook(req, res) {
  const id = req.params.id;
  BookModel.findByIdAndDelete(id)
    .then((record) => {
      res.send(record);
    })
    .catch((error) => {
      res.status(500).send(`Erorr deleting from the DataBase: ${error}`);
    });
}

module.exports = deleteBook;
