const BookModel = require("./modules/booksDB");
const book1 = new BookModel({
  title: "Clean Code",
  description:
    "The clean code offers invaluable insights into code cleaning and software development. It has thorough, step-by-step explanations on cleaning, writing, and refactoring code...",
  status: "Programming",
});
const book2 = new BookModel({
  title: "Design Patterns: Elements of Reusable Object-Oriented Software",
  description:
    "Design Patterns are typical solutions to commonly occurring problems in software design. They are blueprints that you can customize to solve a particular ...",
  status: "Software Design Patterns",
});
const book3 = new BookModel({
  title: "User Stories Applied",
  description:
    "User Stories Applied: For Agile Software Development is a book written by Mike Cohn. The book represents an effective means of gathering requirements from the customer...",
  status: "Agile Software Development",
});

module.exports = { book1, book2, book3 };