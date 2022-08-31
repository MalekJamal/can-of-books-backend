"use stricit";
const BookModel = require("./booksDB");

function updateBook(req, res) {
  const id = req.params.id;
  const { updatedBook } = req.body;
  BookModel.findByIdAndUpdate(id, updatedBook, { new: true })
    .then((record) => {
      res.send(record);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(`Erorr updating in DataBase: ${error}`);
    });
}

module.exports = updateBook;
