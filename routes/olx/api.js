const router = require("express").Router();
const { olxLists } = require("../../db");
const checkAuth = require("../../middleware/checkAuth");

//GET OLX CATEGORY LIST
router.get("/list", checkAuth, (req, res) => {
  if (!olxLists) {
    return res.status(404).json({
      errors: [
        {
          msg: "Access denied!",
        },
      ],
    });
  }

  return res.json(olxLists);
});

router.get("/category/:category", checkAuth, (req, res) => {
  const { category } = req.params;

  if (!category) {
    return res.status(404).json({
      errors: [
        {
          msg: "Must submit a category payload!",
        },
      ],
    });
  }

  const categoryName = olxLists
    .filter((cat) => {
      return cat.item_category === category;
    })
    .map((items) => {
      return items;
    });

  return res.json(categoryName);
});

module.exports = router;
