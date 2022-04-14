const router = require("express").Router();
const { libraryBookLists } = require("../../db");
const checkAuth = require("../../middleware/checkAuth");

//GET LIBRARY BOOK LISTS
router.get("/list", checkAuth, (req, res) => {
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
router.get("/view-book/:id", checkAuth, (req, res) => {
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

module.exports = router;
