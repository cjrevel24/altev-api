const router = require("express").Router();
const { libraryBookLists, borrowedBooks } = require("../../db");

//GET LIBRARY BOOK LISTS
router.get("/list", (req, res) => {
  if (!libraryBookLists) {
    return res.status(404).json({
      errors: [
        {
          msg: "Access denied!",
        },
      ],
    });
  }

  return res.json(libraryBookLists);
});

//VIEW LIBRARY SPECIFIC BOOK
router.get("/view-book/:id", (req, res) => {
  const specifiedBook = libraryBookLists.find(
    (bookId) => bookId.id === parseInt(req.params.id)
  );

  if (!specifiedBook) {
    return res.status(404).json("The book with the given ID was not found!.");
  }

  return res.json(specifiedBook);
});

//GET BOOKs BY CATEGORY
router.get("/search-book/:category", (req, res) => {
  const categoryBooks = libraryBookLists
    .filter(
      (bookCategory) => bookCategory.book_category === req.params.category
    )
    .map((getBooks) => {
      return getBooks;
    });

  if (!categoryBooks) {
    return res
      .status(404)
      .json("The book with the given category was not found!.");
  }

  return res.json(categoryBooks);
});

//SUBMIT BOOROW BOOK
router.post("/borrow-book", (req, res) => {
  const { bookId } = req.body;

  if (bookId === "") {
    return res.status(404).json("Please send the payload (bookId)!");
  } else {
    const findBook = libraryBookLists
      .filter((book) => {
        return book.id === parseInt(bookId);
      })
      .map((bookReserved) => {
        return bookReserved;
      });
    borrowedBooks.push(findBook);
    return res.json("book is reserved!");
  }
});

//SUMMARY OF BOOKING
router.get("/summary", (req, res) => {
  res.json({
    message: "Success vote is submitted",
    success_icon:
      "https://image.similarpng.com/very-thumbnail/2021/06/Green-check-mark-icon-on-transparent-background-PNG.png",
    description: "The staff is confirming your voted candidates!",
  });
});

//GET BORROWED BOOKS
router.get("/my-borrowed-books", (req,res) => {
  res.json(borrowedBooks)
})

module.exports = router;
