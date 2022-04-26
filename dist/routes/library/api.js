"use strict";

var router = require("express").Router();

var _require = require("../../db"),
    libraryBookLists = _require.libraryBookLists,
    borrowedBooks = _require.borrowedBooks; //GET LIBRARY BOOK LISTS


router.get("/list", function (req, res) {
  if (!libraryBookLists) {
    return res.status(404).json({
      errors: [{
        msg: "Access denied!"
      }]
    });
  }

  return res.json(libraryBookLists);
}); //VIEW LIBRARY SPECIFIC BOOK

router.get("/view-book/:id", function (req, res) {
  var specifiedBook = libraryBookLists.find(function (bookId) {
    return bookId.id === parseInt(req.params.id);
  });

  if (!specifiedBook) {
    return res.status(404).json("The book with the given ID was not found!.");
  }

  return res.json(specifiedBook);
}); //GET BOOKs BY CATEGORY

router.get("/search-book/:category", function (req, res) {
  var categoryBooks = libraryBookLists.filter(function (bookCategory) {
    return bookCategory.book_category === req.params.category;
  }).map(function (getBooks) {
    return getBooks;
  });

  if (!categoryBooks) {
    return res.status(404).json("The book with the given category was not found!.");
  }

  return res.json(categoryBooks);
}); //SUBMIT BOOROW BOOK

router.post("/borrow-book", function (req, res) {
  var bookId = req.body.bookId;

  if (bookId === "") {
    return res.status(404).json("Please send the payload (bookId)!");
  } else {
    var findBook = libraryBookLists.filter(function (book) {
      return book.id === parseInt(bookId);
    }).map(function (bookReserved) {
      return bookReserved;
    });
    borrowedBooks.push(findBook);
    return res.json("book is reserved!");
  }
}); //SUMMARY OF BOOKING

router.get("/summary", function (req, res) {
  res.json({
    message: "Success vote is submitted",
    success_icon: "https://image.similarpng.com/very-thumbnail/2021/06/Green-check-mark-icon-on-transparent-background-PNG.png",
    description: "The staff is confirming your voted candidates!"
  });
}); //GET BORROWED BOOKS

router.get("/my-borrowed-books", function (req, res) {
  res.json(borrowedBooks);
});
module.exports = router;
//# sourceMappingURL=api.js.map